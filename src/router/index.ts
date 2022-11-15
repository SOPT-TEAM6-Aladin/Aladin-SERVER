import { Router } from "express";
import basketRouter from "./basketRouter";
import bookRouter from "./bookRouter";

const router: Router = Router();

router.use("/basket", basketRouter);
router.use("/book", bookRouter);


export default router;
