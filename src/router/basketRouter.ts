import { basketController } from "../controller";
import { Router } from "express";

const router:Router = Router();

router.get("/", basketController.getBasketList);
router.post("/", basketController.addBasket);

export default router;