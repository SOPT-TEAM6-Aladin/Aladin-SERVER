import { PrismaClient } from '@prisma/client';
import { basket } from '@prisma/client';

const prisma = new PrismaClient();

const addToBasket = async (userId:number,bookId:number) => {
    const data = await prisma.basket.create({
        data: {
            user_id: userId,
            book_id: bookId
        }
    });
    return data;
};

const getBasketList = async (userId:number) => {
    const data = await prisma.basket.findMany({
        where: {
            user_id: userId
        },
        include: {
            book: true,
        }
    });
    return data;
};

const basketService = {
    addToBasket,
    getBasketList
}

export default basketService;