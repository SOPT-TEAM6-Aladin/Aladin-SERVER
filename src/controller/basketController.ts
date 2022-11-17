import { Request, Response } from 'express';
import { basketService } from '../service';

const getBasketList = async (req:Request, res:Response) => {
    const userId = req.header('userId');

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

const addBasket = async (req:Request, res:Response) => {
    const userId = req.header('userId');
    const { bookId } = req.body;
    const data = await basketService.addBasket(+userId, +bookId);

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
    addBasket
}

export default basketController;