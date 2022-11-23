import { PrismaClient } from '@prisma/client';
import { basket } from '@prisma/client';

const prisma = new PrismaClient();

const addBasket = async (userId:number,bookId:number) => {
    try {
        const checkBasket = await prisma.basket.findFirst({
            where:{
                book_id: bookId
            }
        })
        console.log(checkBasket)
        if (checkBasket) {
            return null;
        }
        const data = await prisma.basket.create({
            data: {
                user_id: userId,
                book_id: bookId
            }
        });
        return data;

    } catch (error) {
        console.log(error)
        throw error
    }
};

const getBasketList = async (userId:number) => {
    const data = await prisma.basket.findMany({
        where: {
            user_id: userId
        },
        select: {
            book: true
        }
    });
    return data;
};

const basketService = {
    addBasket,
    getBasketList
}

export default basketService;