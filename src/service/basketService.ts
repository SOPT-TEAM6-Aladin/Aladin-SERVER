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
        if ( checkBasket == null ) {
            const data = await prisma.basket.create({
                data: {
                    user_id: userId,
                    book_id: bookId
                }
            });
            return data;
        }
        return 400;


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
            book: {
                select:
                    {
                        id:true,
                        name:true,
                        cover:true,
                        painter:true,
                        price:true,
                        discount_rate:true,
                        point:true
                    }
            }
        }
    });
    // let dataList:any = {};
    // let returnDataList = []
    // for (let i=0; i < data.length; i++) {
    //     dataList["book"] = data[i].book;
    // }
    // return dataList
    return data;
};

const basketService = {
    addBasket,
    getBasketList
}

export default basketService;