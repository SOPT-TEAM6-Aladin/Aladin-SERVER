import { Router } from 'express';
import bookRouter from './bookRouter';
const router: Router = Router();

router.use('/book', bookRouter);

export default router;
