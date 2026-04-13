import { saveRecord as dbSaveRecord, getAllRecords, deleteRecord } from "db.js";
import { scan } from "ocr.js";
import { exportData as exportFile } from "export.js";

// ✅ expose to HTML
window.saveRecord = async function () {
  const record = {
    id: Date.now().toString(),
    serialId: document.getElementById("serial").value,
    status: document.getElementById("status").value,
    notes: document.getElementById("notes").value,
    timestamp: Date.now(),
    lastEditedAt: Date.now()
  };

  await dbSaveRecord(record);
  loadRecords();
};

async function loadRecords() {
  const records = await getAllRecords();

  records.sort((a, b) => b.timestamp - a.timestamp);

  document.getElementById("records").innerHTML =
    records.map(r => `
      <div class="record">
        <b>${r.serialId}</b><br>
        ${r.status}<br>
        ${new Date(r.timestamp).toLocaleString()}<br>
        <button onclick="deleteItem('${r.id}')">Delete</button>
      </div>
    `).join("");
}

window.deleteItem = async function(id) {
  await deleteRecord(id);
  loadRecords();
};

window.exportData = async function () {
  const records = await getAllRecords();
  exportFile(records);
};

document.getElementById("scan").addEventListener("change", async (e) => {
  const text = await scan(e.target.files[0]);
  document.getElementById("serial").value = text;
});

loadRecords();
