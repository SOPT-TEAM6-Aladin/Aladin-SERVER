import { Request, Response, NextFunction } from 'express';
import { bookService } from '../service';

const getBookInfo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const userId = req.header('userId');

  const data = await bookService.getBookInfo(+id, Number(userId));

  if (!data) {
    return res.status(404).json({ status: 404, message: 'NOT_FOUND' });
  }
  return res.status(200).json({ status: 200, message: '책 상세 조회 성공', data });
};

const getBookList = async (req: Request, res: Response) => {
  const data = await bookService.getBookList();

  if (!data) {
    return res.status(404).json({ status: 404, message: 'NOT_FOUND' });
  }
  return res.status(200).json({ status: 200, message: '책 리스트 조회 성공', data });
};

const likeBook = async (req: Request, res: Response, next: NextFunction) => {
  const { bookId } = req.params;
  const userId = req.header('userId');

  const data = await bookService.likeBook(Number(bookId), Number(userId));

  if (!data) {
    return res.status(400).json({
      status: 400,
      message: 'BAD REQUEST',
    });
  }
  return res.status(200).json({
    status: 200,
    message: 'OK',
    data: data,
  });
};

const bookController = {
  getBookList,
  getBookInfo,
  likeBook,
};

export default bookController;
