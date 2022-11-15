import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const bookLike = async (bookId: number, userId: number) => {
    const likeData = await prisma.like.findFirst({
        where: {
            user_id: userId,
            book_id: bookId
        }
    })

    const likeCount = await prisma.like.count({
        where: {
            book_id: bookId
        }
    })

    if(!likeData) {
        const newLikeData = await prisma.like.create({
            data: {
                user_id: userId,
                book_id: bookId
            }
        })
        const returnData = {
            newLikeData,
            "likeCount": likeCount,
            "hasLike": true

        }
        return returnData;
    }

    const deleteLikeData = await prisma.like.delete({
        where: {
            id: likeData.id
        }
    })
    const returnData = {
        deleteLikeData,
        "likeCount": likeCount,
        "hasLike": false
    }
    return returnData;
};


const getBookList = async () => {
    const topic = await prisma.book.findMany({
      where: {
        topic: true,
      },
    });
  
    const pick = await prisma.book.findMany({
      where: {
        pick: true,
      },
    });
  
    const data = {
      topic,
      pick,
    };
    return data;
  };

const bookService = {
    bookLike,
    getBookList
};

export default bookService;