import { Request, Response } from "express";

export interface IAdharaOcrController {
    adharDetiles(req:Request,res:Response):Promise<void>
}