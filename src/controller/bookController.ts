import { Request, Response } from 'express';
import { bookService } from '../service';

const getBookList = async (req: Request, res: Response) => {
  const data = await bookService.getBookList();

  if (!data) {
    return res.status(404).json({ status: 404, message: 'NOT_FOUND' });
  }
  return res.status(200).json({ status: 200, message: '책 리스트 조회 성공', data });
};

const getBookInfo = async (req: Request, res: Response) => {
  const { id } = req.params;

  const data = await bookService.getBookInfo(+id);

  if (!data) {
    return res.status(404).json({ status: 404, message: 'NOT_FOUND' });
  }
  return res.status(200).json({ status: 200, message: '책 상세 조회 성공', data });
};

const bookController = {
  getBookList,
  getBookInfo,
};

export default bookController;
