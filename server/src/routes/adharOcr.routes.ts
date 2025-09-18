import express from "express";
import { container } from "tsyringe";
import { AadhaarController } from "../controller/adhaar.controller";
 
const router = express.Router();
const adharController = container.resolve(AadhaarController)
router.post("/adhaar", (req, res) => adharController.adharDetiles(req, res))
export default router