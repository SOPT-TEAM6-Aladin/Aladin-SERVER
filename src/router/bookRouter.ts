import { Router } from 'express';
import { bookController } from '../controller';
import { body } from 'express-validator';
const { validatorErrorChecker } = require('../middlewares/validator');
const router: Router = Router();

router.get('/', bookController.getBookList);
router.get('/:id', bookController.getBookInfo);

export default router;
