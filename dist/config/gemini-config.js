import { GoogleGenerativeAI } from "@google/generative-ai";
export const configureGemini = () => {
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    // Initialize the model you want to use
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    return model;
};
//# sourceMappingURL=gemini-config.js.map