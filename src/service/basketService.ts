import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const addBasket = async (userId:number, bookId2:number) => {
    try {
        const checkBasket = await prisma.basket.findFirst({
            where:{
                book_id: bookId2
            }
        })
        console.log(checkBasket)
        if (checkBasket) {
            return null;
        }
        const data = await prisma.basket.create({
            data: {
                user_id: userId,
                book_id: bookId2
            }
        });
        return data;

    } catch (error) {
        console.log(error)
        throw error
    }
};


const getBasketList = async (userId:number) => {
    // const basketData = await prisma.basket.findMany({
    //     where: {
    //         user_id: userId
    //     },
    //     include: {
    //         book: {
    //             select:{
    //                 id: true,
    //                 name: true,
    //                 cover: true,
    //                 painter: true,
    //                 price: true,
    //                 discount_rate: true,
    //                 point: true
    //             }
    //         }
    //     }
    // })
    try {
        const basketIdList = await prisma.basket.findMany({
            where: {
                user_id: userId
            },
            select: {
                id: true
            }
        })
        const dataList:object[] = [];
        for (let i =0; i < basketIdList.length; i++) {
            const newId = basketIdList[i].id;
            console.log(newId);
            if ( newId == undefined) {
                return 400;
            }

            const bookData = await prisma.book.findFirst({
                where: {
                    id: newId
            }
        })
        console.log(bookData);
         dataList.push(bookData);
         console.log(dataList);
        }
    
        return dataList;
    } catch (error) {
        console.log(error);
        throw error;
    }
    

    // for (let i=0; basketData.length; i++) {
        
    // }
    
};


const basketService = {
    addBasket,
    getBasketList
}

export default basketService;