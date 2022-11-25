"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("../controller");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", controller_1.basketController.getBasketList);
router.post("/", controller_1.basketController.addBasket);
exports.default = router;
//# sourceMappingURL=basketRouter.js.map