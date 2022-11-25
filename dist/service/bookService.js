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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const likeBook = (bookId, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const likeData = yield prisma.like.findFirst({
        where: {
            user_id: userId,
            book_id: bookId
        }
    });
    const likeCount = yield prisma.like.count({
        where: {
            book_id: bookId
        }
    });
    if (!likeData) {
        const newLikeData = yield prisma.like.create({
            data: {
                user_id: userId,
                book_id: bookId
            },
            select: {
                id: true,
                user_id: true,
                book_id: true
            }
        });
        const returnData = {
            "id": newLikeData.id,
            "user_id": newLikeData.user_id,
            "book_id": newLikeData.book_id,
            "likeCount": likeCount,
            "hasLike": true
        };
        return returnData;
    }
    const deleteLikeData = yield prisma.like.delete({
        where: {
            id: likeData.id
        },
        select: {
            id: true,
            user_id: true,
            book_id: true
        }
    });
    const returnData = {
        "id": deleteLikeData.id,
        "user_id": deleteLikeData.user_id,
        "book_id": deleteLikeData.book_id,
        "likeCount": likeCount,
        "hasLike": false
    };
    return returnData;
});
const getBookList = () => __awaiter(void 0, void 0, void 0, function* () {
    const topic = yield prisma.book.findMany({
        where: {
            topic: true,
        },
    });
    const pick = yield prisma.book.findMany({
        where: {
            pick: true,
        },
    });
    const data = {
        topic,
        pick,
    };
    return data;
});
const getBookInfo = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield prisma.book.findUnique({
        where: {
            id: bookId,
        },
    });
    return book;
});
const bookService = {
    getBookList,
    getBookInfo,
    likeBook
};
exports.default = bookService;
//# sourceMappingURL=bookService.js.map