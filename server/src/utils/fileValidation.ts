import { Request } from "express";
import { StatusCode } from "../enums/statusCode.enum";
import { MSG } from "../const/messages";

const allowedMimeTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];

export function validateImageFile(
  file?: Express.Multer.File
): { isValid: boolean; error?: { status: number; message: string } } {
  if (!file) {
    return {
      isValid: false,
      error: { status: StatusCode.BAD_REQUEST, message: MSG.NO_FILE },
    };
  }

  if (!allowedMimeTypes.includes(file.mimetype)) {
    return {
      isValid: false,
      error: { status: StatusCode.CONFLICT, message: MSG.INVALID_FILE_TYPE },
    };
  }

  return { isValid: true };
}
