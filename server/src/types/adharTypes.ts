import { StatusCode } from "../enums/statusCode.enum"

export interface IAadhaarData {
  name: string
  dateOfBirth: string
  gender: string
  aadhaarNumber: string
  address: string
}


export interface CustomError extends Error {
  statusCode?: number;
}
export interface IValidationResult {
  isValid: boolean;
  message?: string;
  status?: StatusCode;
}