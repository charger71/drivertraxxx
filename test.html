<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>DriverTraxxx</title>

<style>
body {
  font-family: Arial;
  padding: 12px;
  background: #f7f7f7;
}

input, select, textarea, button {
  width: 100%;
  margin: 6px 0;
  padding: 12px;
  font-size: 16px;
}

.record {
  background: white;
  padding: 10px;
  margin-top: 8px;
  border-radius: 6px;
}
</style>
</head>

<body>

<h2>DriverTraxxx</h2>

<h3>New Entry</h3>

<input id="serial" placeholder="Serial ID">

<input type="file" id="scan" accept="image/*" capture="environment">

<select id="status">
  <option>CLEAN</option>
  <option>DIRTY</option>
  <option>PM</option>
  <option>MR</option>
  <option>AUDIT FAIL</option>
  <option>WI</option>
  <option>GLASS</option>
  <option>OTHER</option>
</select>

<textarea id="notes" placeholder="Notes"></textarea>

<button onclick="saveRecord()">Save</button>
<button onclick="exportData()">Export JSON</button>

<h3>Records</h3>
<div id="records"></div>

<!-- OCR LIB -->
<script src="https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js"></script>

<script>
/* =========================
   LOCAL STORAGE DB
========================= */

const DB_KEY = "drivertraxxx_records";

function getRecords() {
  return JSON.parse(localStorage.getItem(DB_KEY) || "[]");
}

function setRecords(records) {
  localStorage.setItem(DB_KEY, JSON.stringify(records));
}

/* =========================
   SAVE RECORD
========================= */

function saveRecord() {
  const records = getRecords();

  const record = {
    id: Date.now().toString(),
    serialId: document.getElementById("serial").value,
    status: document.getElementById("status").value,
    notes: document.getElementById("notes").value,
    timestamp: Date.now(),
    lastEditedAt: Date.now()
  };

  records.unshift(record);
  setRecords(records);

  render();
}

/* =========================
   DELETE RECORD
========================= */

function deleteRecord(id) {
  let records = getRecords();
  records = records.filter(r => r.id !== id);
  setRecords(records);
  render();
}

/* =========================
   RENDER UI
========================= */

function render() {
  const records = getRecords();

  document.getElementById("records").innerHTML =
    records.map(r => `
      <div class="record">
        <b>${r.serialId}</b><br>
        ${r.status}<br>
        ${new Date(r.timestamp).toLocaleString()}<br>
        <button onclick="deleteRecord('${r.id}')">Delete</button>
      </div>
    `).join("");
}

/* =========================
   EXPORT
========================= */

function exportData() {
  const records = getRecords();

  const blob = new Blob(
    [JSON.stringify(records, null, 2)],
    { type: "application/json" }
  );

  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "drivertraxxx.json";
  a.click();
}

/* =========================
   OCR SCAN
========================= */

document.getElementById("scan").addEventListener("change", async (e) => {
  const file = e.target.files[0];

  const result = await Tesseract.recognize(file, "eng");

  const text = result.data.text.replace(/[^A-Z0-9]/gi, "");
  document.getElementById("serial").value = text;
});

/* =========================
   INIT
========================= */

render();

</script>
</body>
</html>
