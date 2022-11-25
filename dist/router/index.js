"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const basketRouter_1 = __importDefault(require("./basketRouter"));
const bookRouter_1 = __importDefault(require("./bookRouter"));
const router = (0, express_1.Router)();
router.use("/basket", basketRouter_1.default);
router.use("/book", bookRouter_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map