"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureGemini = void 0;
const generative_ai_1 = require("@google/generative-ai");
const configureGemini = () => {
    const genAI = new generative_ai_1.GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    // Initialize the model you want to use
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    return model;
};
exports.configureGemini = configureGemini;
//# sourceMappingURL=gemini-config.js.map