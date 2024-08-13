"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routes_js_1 = require("./user-routes.js");
const chat_routes_js_1 = require("./chat-routes.js");
const appRouter = (0, express_1.Router)();
appRouter.use("/user", user_routes_js_1.default); //domain/api/v1/user
appRouter.use("/chat", chat_routes_js_1.default); //domain/api/v1/chats
exports.default = appRouter;
//# sourceMappingURL=index.js.map