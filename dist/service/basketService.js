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
const addBasket = (userId, bookId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const checkBasket = yield prisma.basket.findFirst({
            where: {
                book_id: bookId
            }
        });
        console.log(checkBasket);
        if (checkBasket == null) {
            const data = yield prisma.basket.create({
                data: {
                    user_id: userId,
                    book_id: bookId
                }
            });
            return data;
        }
        return 400;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
const getBasketList = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield prisma.basket.findMany({
        where: {
            user_id: userId
        },
        select: {
            book: {
                select: {
                    id: true,
                    name: true,
                    cover: true,
                    painter: true,
                    price: true,
                    discount_rate: true,
                    point: true
                }
            }
        }
    });
    // let dataList:any = {};
    // let returnDataList = []
    // for (let i=0; i < data.length; i++) {
    //     dataList["book"] = data[i].book;
    // }
    // return dataList
    return data;
});
const basketService = {
    addBasket,
    getBasketList
};
exports.default = basketService;
//# sourceMappingURL=basketService.js.map