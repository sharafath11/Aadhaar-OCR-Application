import { IAadhaarData } from "../../../types/adharTypes";

export interface IAdharaOcrService {
    adharaOcrService(frontImage:Express.Multer.File,backImage: Express.Multer.File):Promise<IAadhaarData>
}