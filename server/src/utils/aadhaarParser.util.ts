import { IAadhaarData } from "../types/adharTypes"

export function parseAadhaarText(text: string): IAadhaarData {

  console.log("parse text",text)
  const aadhaarNumberMatch = text.match(/\d{4}\s\d{4}\s\d{4}/)
  const dobMatch = text.match(/\d{2}\/\d{2}\/\d{4}/)
  const genderMatch = text.match(/\b(Male|Female|Transgender|Other)\b/i)

  const nameRegex = /(?:Name|S\/O|D\/O|W\/O)[:\-]?\s*([A-Za-z ]{3,})/i
  const nameMatch = text.match(nameRegex)

  const addressRegex = /Address[:\-]?\s*([A-Za-z0-9,\-\s]+)/i
  const addressMatch = text.match(addressRegex)

  return {
    aadhaarNumber: aadhaarNumberMatch?.[0] ?? "",
    dateOfBirth: dobMatch?.[0] ?? "",
    gender: genderMatch?.[0] ?? "",
    name: nameMatch?.[1]?.trim() ?? "",
    address: addressMatch?.[1]?.trim() ?? "",
  }
}
