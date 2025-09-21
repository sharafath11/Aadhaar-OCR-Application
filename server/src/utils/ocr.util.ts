import { createWorker } from "tesseract.js";

async function preprocessImage(imageData: Buffer): Promise<Buffer> {
  return imageData;
}

export async function extractTextFromImages(
  ...images: (Express.Multer.File | undefined)[]
): Promise<string> {
  const worker = await createWorker("eng");
  const validImages = images.filter(Boolean) as Express.Multer.File[];
  const recognitionPromises = validImages.map(async (image) => {
    const processedImageBuffer = await preprocessImage(image.buffer);
    const { data: { text } } = await worker.recognize(processedImageBuffer);
    return text;
  });

  const recognizedTexts = await Promise.all(recognitionPromises);
  await worker.terminate();

  const combinedText = recognizedTexts.join(" ");
  return combinedText.replace(/\n+/g, " ").trim();
}