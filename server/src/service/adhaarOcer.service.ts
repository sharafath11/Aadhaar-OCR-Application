import { injectable } from "tsyringe";
import { IAdharaOcrService } from "../core/interfaces/services/IAdharOcr.service";
import { IAadhaarTypes } from "../types/adharTypes";

@injectable()
export class AdhaarOcrServices implements IAdharaOcrService {
    async adharaOcrService(data: IAadhaarTypes): Promise<IAadhaarTypes> {
        return {
            aadhaarNumber: "1254845215712",
            address: "hghbnjkoi uyhghb",
            dob: "21/12/12",
            gender: "Male",
            name: "sharafath",
            pincode:"673019"
        }
    }
}