import { container } from "tsyringe"
import { AdhaarOcrServices } from "../../service/adhaarOcer.service"
import { IAdharaOcrService } from "../interfaces/services/IAdharOcr.service"
import { TYPES } from "../types"

container.registerSingleton<IAdharaOcrService>(TYPES.IAdharaOcrService,AdhaarOcrServices)
export { container }