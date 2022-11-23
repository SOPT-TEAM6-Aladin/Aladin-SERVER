import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const likeBook = async (bookId: number, userId: number) => {
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
            },
            select: {
              id: true,
              user_id:true,
              book_id:true
            }
        })
        const returnData = {
            "id": newLikeData.id,
            "user_id": newLikeData.user_id,
            "book_id": newLikeData.book_id,
            "likeCount": likeCount,
            "hasLike": true

        }
        return returnData;
    }

    const deleteLikeData = await prisma.like.delete({
        where: {
            id: likeData.id
        },
        select: {
          id: true,
          user_id:true,
          book_id:true
        }
    })
    const returnData = {
        "id": deleteLikeData.id,
        "user_id": deleteLikeData.user_id,
        "book_id": deleteLikeData.book_id,
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

const getBookInfo = async (bookId: number) => {
  const book = await prisma.book.findUnique({
    where: {
      id: bookId,
    },
  });
  return book;
};

const bookService = {
  getBookList,
  getBookInfo,
  likeBook
};

export default bookService;