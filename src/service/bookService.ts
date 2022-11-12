import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

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
  getBookList,
};

export default bookService;
