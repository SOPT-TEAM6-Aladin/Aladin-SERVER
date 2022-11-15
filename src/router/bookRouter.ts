import { bookController } from '../controller';
import { Router } from 'express';

const router:Router = Router();

router.put("/:bookId/like", bookController.bookLike);

export default router;