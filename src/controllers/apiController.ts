import { Request, Response} from "express"
import { Cardapio } from "../models/Cardapio";

export const getProducts = async(req: Request, res:Response) =>{
    let list = await Cardapio.findAll()
    res.json({list})
}

