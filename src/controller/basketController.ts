import { Request, Response } from 'express';
import { basketService } from '../service';

const getBasketList = async (req:Request, res:Response) => {
    const userId:any = req.header('userId');

    const data = await basketService.getBasketList(+userId);

    if(!data) {
        return res.status(400).json({
            status:400,
            message:"BAD REQUEST"
        })
    }

    return res.status(200).json({
        status:200,
        message:"OK",
        data: data
    })
};

const addToBasket = async (req:Request, res:Response) => {
    const userId:any = req.header('userId');
    const { bookId } = req.body;
    const data = await basketService.addToBasket(+userId, +bookId);

    if (!data) {
        res.status(400).json({
            status:400,
            message: "BAD REQUEST"
        })
    }

    return res.status(200).json({
        status:200,
        message: "OK",
        data: data
    })
};

const basketController = {
    getBasketList,
    addToBasket
}

export default basketController;