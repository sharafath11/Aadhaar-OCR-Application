import { IAadhaarTypes } from "../../../types/adharTypes";

export interface IAdharaOcrService {
    adharaOcrService(data:IAadhaarTypes):Promise<IAadhaarTypes>
}