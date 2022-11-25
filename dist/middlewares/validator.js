"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { validationResult } = require('express-validator');
exports.validatorErrorChecker = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ status: 400, message: 'BAD REQUEST' });
    }
    next();
};
//# sourceMappingURL=validator.js.map