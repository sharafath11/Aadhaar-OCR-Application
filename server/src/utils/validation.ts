import { StatusCode } from "../enums/statusCode.enum";
import { IValidationResult } from "../types/adharTypes";



export const validateUploadedFiles = (files: {
  frontImage?: Express.Multer.File[];
  backImage?: Express.Multer.File[];
}, validateImageFile: (file: Express.Multer.File) => { isValid: boolean; error?: { message: string; status: StatusCode } }): IValidationResult => {
  if (!files?.frontImage?.[0] || !files?.backImage?.[0]) {
    return { isValid: false, message: "No files uploaded", status: StatusCode.BAD_REQUEST };
  }

  const frontValidation = validateImageFile(files.frontImage[0]);
  if (!frontValidation.isValid) return { isValid: false, ...frontValidation.error! };

  const backValidation = validateImageFile(files.backImage[0]);
  if (!backValidation.isValid) return { isValid: false, ...backValidation.error! };

  return { isValid: true };
};

export const validateAadhaarNumber = (aadhaarNumber?: string): IValidationResult => {
  if (!aadhaarNumber) return { isValid: false, message: "Aadhaar number not found", status: StatusCode.BAD_REQUEST };

  const aadhaarRegex = /^\d{4}\s?\d{4}\s?\d{4}$/;
  if (!aadhaarRegex.test(aadhaarNumber)) {
    return { isValid: false, message: "Invalid Aadhaar number format", status: StatusCode.BAD_REQUEST };
  }

  return { isValid: true };
};
