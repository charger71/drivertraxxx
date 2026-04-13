export function exportData(records) {
  const json = JSON.stringify(records, null, 2);

  const blob = new Blob([json], { type: "application/json" });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "drivertraxxx_data.json";
  link.click();
}
