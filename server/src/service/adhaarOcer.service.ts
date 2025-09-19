import { injectable } from "tsyringe";
import { IAdharaOcrService } from "../core/interfaces/services/IAdharOcr.service";
import { IAadhaarData } from "../types/adharTypes";
import { extractTextFromImages } from "../utils/ocr.util";
import { parseAadhaarText } from "../utils/aadhaarParser.util";

@injectable()
export class AdhaarOcrServices implements IAdharaOcrService {
  async adharaOcrService(frontImage: Express.Multer.File,backImage: Express.Multer.File): Promise<IAadhaarData> {
      const fullText = await extractTextFromImages(frontImage, backImage);
      return parseAadhaarText(fullText);
  }
}
