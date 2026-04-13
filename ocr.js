import Tesseract from "https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js";

export async function scan(file) {
  const result = await Tesseract.recognize(file, "eng");
  return result.data.text.replace(/[^A-Z0-9]/gi, "").trim();
}
