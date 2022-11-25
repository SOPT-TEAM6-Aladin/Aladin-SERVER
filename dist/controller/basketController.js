"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("../service");
const getBasketList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.header('userId');
    const data = yield service_1.basketService.getBasketList(Number(userId));
    if (!data) {
        return res.status(400).json({
            status: 400,
            message: "BAD REQUEST"
        });
    }
    return res.status(200).json({
        status: 200,
        message: "OK",
        data: data
    });
});
const addBasket = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.header('userId');
    const { bookId } = req.body;
    const data = yield service_1.basketService.addBasket(Number(userId), Number(bookId));
    if (!data) {
        return res.status(400).json({
            status: 400,
            message: "이미 장바구니를 추가 했습니다."
        });
    }
    return res.status(200).json({
        status: 200,
        message: "OK",
        data: data
    });
});
const basketController = {
    getBasketList,
    addBasket
};
exports.default = basketController;
//# sourceMappingURL=basketController.js.map