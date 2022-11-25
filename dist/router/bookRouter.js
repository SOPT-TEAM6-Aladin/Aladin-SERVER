"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("../controller");
const express_1 = require("express");
const { validatorErrorChecker } = require('../middlewares/validator');
const router = (0, express_1.Router)();
router.get('/', controller_1.bookController.getBookList);
router.get('/:id', controller_1.bookController.getBookInfo);
router.put("/:bookId/like", controller_1.bookController.likeBook);
exports.default = router;
//# sourceMappingURL=bookRouter.js.map