import {Request, Response} from 'express'
import { createMenuObject } from '../helpers/createMenuObjects'


export const home = (req:Request, res: Response) =>{
    res.render('pages/index',{
       menu:createMenuObject('index')
    })
}

export const pedidos = (req:Request, res: Response) =>{
    res.render('pages/pedidos',{
        menu:createMenuObject('pedidos')
    })
    
}
export const historia = (req:Request, res: Response) =>{
    res.render('pages/historia',{
        menu:createMenuObject('historia')
    })
    
}
export const cardapio = (req:Request, res: Response) =>{
    res.render('pages/cardapio',{
        menu:createMenuObject('cardapio')
    })
}
export const pagamento = (req:Request, res: Response) =>{
    res.render('pages/pagamento')
}

