import { IAadhaarData } from "../types/adharTypes";

export function parseAadhaarText(text: string): IAadhaarData {
  const cleanedText = text.replace(/[\n\r]+/g, ' ').trim();
  const aadhaarNumberMatch = cleanedText.match(/\d{4}\s?\d{4}\s?\d{4}/);
  const dobMatch = cleanedText.match(/\d{2}\/\d{2}\/\d{4}/);
  const genderMatch = cleanedText.match(/\b(Male|Female|Transgender|Other)\b/i);

  let name = "";
  const nameKeywordMatch = cleanedText.match(/Name\s*:\s*([A-Za-z\s.]+)/i);
  if (nameKeywordMatch) {
    name = nameKeywordMatch[1].trim();
  } else {
    if (dobMatch) {
      const dobIndex = cleanedText.indexOf(dobMatch[0]);
      const textBeforeDob = cleanedText.substring(0, dobIndex);
      const potentialNames = textBeforeDob.match(/[A-Z][a-z]+\s(?:[A-Z][a-z]+\s?)+/g);
      if (potentialNames && potentialNames.length > 0) {
        name = potentialNames[potentialNames.length - 1].trim();
      }
    }
  }
  return {
    aadhaarNumber: aadhaarNumberMatch?.[0] ?? "",
    dateOfBirth: dobMatch?.[0] ?? "",
    gender: genderMatch?.[0] ?? "",
    name: name ?? "",
    address: cleanedText.match(/Address[:\-]?\s*([A-Za-z0-9,\-\s]+)/i)?.[1]?.trim() ?? "",
  };
}