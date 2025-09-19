import { container } from "tsyringe"
import { AdhaarOcrServices } from "../../service/adhaarOcer.service"
import { IAdharaOcrService } from "../interfaces/services/IAdharOcr.service"
import { TYPES } from "../types"
import { IAdharaOcrController } from "../interfaces/controllers/IAdharOcr.Controller";
import { AadhaarController } from "../../controller/adhaar.controller";

container.register<IAdharaOcrService>(TYPES.IAdharaOcrService, AdhaarOcrServices);
container.register<IAdharaOcrController>(TYPES.IAdharaOcrController,AadhaarController)
export { container }