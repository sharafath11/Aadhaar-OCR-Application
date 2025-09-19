import express from "express";
import { container } from "tsyringe";
import { AadhaarController } from "../controller/adhaar.controller";
import { upload } from "../config/multer.config";
import { IAdharaOcrController } from "../core/interfaces/controllers/IAdharOcr.Controller";
 
const router = express.Router();
const adharController = container.resolve<IAdharaOcrController>(AadhaarController)
router.post("/adhaar",upload.fields([{name:"frontImage",maxCount:1},{name:"backImage",maxCount:1}]),adharController.adharDetiles.bind(adharController))
export default router