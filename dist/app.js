"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dotenv_1 = require("dotenv");
const morgan_1 = require("morgan");
const index_js_1 = require("./routes/index.js");
const cookie_parser_1 = require("cookie-parser");
const cors_1 = require("cors");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
//middlewares
app.use((0, cors_1.default)({ origin: "http://localhost:5173", credentials: true }));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)(process.env.COOKIE_SECRET));
//remove it in production
app.use((0, morgan_1.default)("dev"));
app.use("/api/v1", index_js_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map