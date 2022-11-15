import { Request, Response, NextFunction } from 'express';
import { bookService } from '../service';

const bookLike = async (req: Request, res: Response, next: NextFunction) => {
    const { bookId } = req.params;
    const userId = req.header('userId');

    const data = await bookService.bookLike(Number(bookId), Number(userId));

    if (!data) {
        return res.status(400).json({
            status: 400,
            message: "BAD REQUEST"
        })
    }
    return res.status(200).json({
        status: 200,
        message: "OK",
        data: data
    })
}

const bookController = {
    bookLike,
    getBookList
};

const getBookList = async (req: Request, res: Response) => {
  const data = await bookService.getBookList();

  if (!data) {
    return res.status(404).json({ status: 404, message: 'NOT_FOUND' });
  }
  return res.status(200).json({ status: 200, message: '유저 조회 성공', data });
};


export default bookController;

