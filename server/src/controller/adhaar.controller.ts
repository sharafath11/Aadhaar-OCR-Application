import { Request, Response } from "express";
import { IAdharaOcrController } from "../core/interfaces/controllers/IAdharOcr.Controller";
import { inject, injectable } from "tsyringe";
import { TYPES } from "../core/types";
import { IAdharaOcrService } from "../core/interfaces/services/IAdharOcr.service";
import { handleControllerError, sendResponse } from "../utils/response";
import { StatusCode } from "../enums/statusCode.enum";
import { MSG } from "../const/messages"; 
@injectable()
export class AadhaarController implements IAdharaOcrController {
  constructor(@inject(TYPES.IAdharaOcrService) private _ocrService : IAdharaOcrService){}
  async adharDetiles(req: Request, res: Response): Promise<void> {
      try {
        const result = await this._ocrService.adharaOcrService(req.body)
        sendResponse(res,StatusCode.OK,MSG.ok,true,result)
      } catch (error) {
        handleControllerError(res,error)
      }
  }
}