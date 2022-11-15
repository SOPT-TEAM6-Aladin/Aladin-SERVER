import { Request, Response } from 'express';
import { bookService } from '../service';

const getBookList = async (req: Request, res: Response) => {
  const data = await bookService.getBookList();

  if (!data) {
    return res.status(404).json({ status: 404, message: 'NOT_FOUND' });
  }
  return res.status(200).json({ status: 200, message: '유저 조회 성공', data });
};

const bookController = {
  getBookList,
};

export default bookController;
