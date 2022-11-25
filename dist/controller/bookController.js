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
const getBookInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = yield service_1.bookService.getBookInfo(+id);
    if (!data) {
        return res.status(404).json({ status: 404, message: 'NOT_FOUND' });
    }
    return res.status(200).json({ status: 200, message: '책 상세 조회 성공', data });
});
const getBookList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield service_1.bookService.getBookList();
    if (!data) {
        return res.status(404).json({ status: 404, message: 'NOT_FOUND' });
    }
    return res.status(200).json({ status: 200, message: '책 리스트 조회 성공', data });
});
const likeBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    const userId = req.header('userId');
    const data = yield service_1.bookService.likeBook(Number(bookId), Number(userId));
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
const bookController = {
    getBookList,
    getBookInfo,
    likeBook
};
exports.default = bookController;
//# sourceMappingURL=bookController.js.map