import { createWorker } from "tesseract.js";

export async function extractTextFromImages(
  ...images: (Express.Multer.File | undefined)[]
): Promise<string> {
  const worker = await createWorker("eng");
  let combinedText = "";

  for (const image of images) {
    if (!image) continue;
    const { data } = await worker.recognize(image.buffer || image.path);
    combinedText += " " + data.text;
  }

  await worker.terminate();
  return combinedText.replace(/\n+/g, " ").trim();
}
