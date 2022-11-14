import { Router } from "express";
import basketRouter from "./basketRouter";

const router: Router = Router();

router.use("/basket", basketRouter);

export default router;
