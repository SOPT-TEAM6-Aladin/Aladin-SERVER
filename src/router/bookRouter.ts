import { bookController } from '../controller';
import { Router } from 'express';
import { body } from 'express-validator';
const { validatorErrorChecker } = require('../middlewares/validator');

const router:Router = Router();

router.get('/', bookController.getBookList);
router.get('/:id', bookController.getBookInfo);
router.put("/:bookId/like", bookController.likeBook);

export default router;
