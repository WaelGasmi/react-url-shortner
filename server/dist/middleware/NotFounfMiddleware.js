"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundMiddleware = void 0;
const NotFoundMiddleware = async (req, res) => {
    res.status(404).json({ error: "Route Not Found" });
};
exports.NotFoundMiddleware = NotFoundMiddleware;
