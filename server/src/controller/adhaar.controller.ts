import { Request, Response } from "express";
import { IAdharaOcrController } from "../core/interfaces/controllers/IAdharOcr.Controller";
import { inject, injectable } from "tsyringe";
import { TYPES } from "../core/types";
import { IAdharaOcrService } from "../core/interfaces/services/IAdharOcr.service";
import { handleControllerError, sendResponse } from "../utils/response";
import { StatusCode } from "../enums/statusCode.enum";
import { MSG } from "../const/messages"; 
import { validateImageFile } from "../utils/fileValidation";
@injectable()
export class AadhaarController implements IAdharaOcrController {
  constructor(@inject(TYPES.IAdharaOcrService) private _ocrService : IAdharaOcrService){}
  async adharDetiles(req: Request, res: Response): Promise<void> {
    try {
      const files = req.files as { 
        frontImage?: Express.Multer.File[]; 
        backImage?: Express.Multer.File[];
      };
      if (!files?.frontImage?.[0] || !files?.backImage?.[0]) return sendResponse(res, StatusCode.BAD_REQUEST, MSG.NO_FILE, false);
      const frontValidation = validateImageFile(files.frontImage[0]);
      if (!frontValidation.isValid)return sendResponse(res, frontValidation.error!.status, frontValidation.error!.message, false);
      const backValidation = validateImageFile(files.backImage[0]);
      if (!backValidation.isValid)return sendResponse(res, backValidation.error!.status, backValidation.error!.message, false);
      const result = await this._ocrService.adharaOcrService(files.frontImage[0] ,files.backImage[0]);
      sendResponse(res, StatusCode.OK, MSG.ok, true, result);
    } catch (error) {
      handleControllerError(res, error);
    }
  }
}