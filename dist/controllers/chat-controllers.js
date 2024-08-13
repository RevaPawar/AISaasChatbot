"use strict";
// import { NextFunction, Request, Response } from "express";
// import User from "../models/User.js";
// import { configureOpenAI } from "../config/openai-config.js";
// import { OpenAIApi, ChatCompletionRequestMessage } from "openai";
// export const generateChatCompletion = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const { message } = req.body;
//   try {
//     const user = await User.findById(res.locals.jwtData.id);
//     if (!user)
//       return res
//         .status(401)
//         .json({ message: "User not registered OR Token malfunctioned" });
//     // grab chats of user
//     const chats = user.chats.map(({ role, content }) => ({
//       role,
//       content,
//     })) as ChatCompletionRequestMessage[];
//     chats.push({ content: message, role: "user" });
//     user.chats.push({ content: message, role: "user" });
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteChats = exports.sendChatsToUser = exports.generateChatCompletion = void 0;
const User_js_1 = require("../models/User.js");
const gemini_config_js_1 = require("../config/gemini-config.js");
const generateChatCompletion = async (req, res, next) => {
    const { message } = req.body;
    try {
        const user = await User_js_1.default.findById(res.locals.jwtData.id);
        if (!user) {
            return res
                .status(401)
                .json({ message: "User not registered OR Token malfunctioned" });
        }
        const gemini = (0, gemini_config_js_1.configureGemini)();
        // Make the API call to generate content
        const result = await gemini.generateContent(message);
        const response = await result.response;
        const generatedText = await response.text();
        // Store the user and assistant's messages
        user.chats.push({ content: message, role: "user" });
        user.chats.push({ content: generatedText, role: "assistant" });
        await user.save();
        return res.status(200).json({ chats: user.chats });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};
exports.generateChatCompletion = generateChatCompletion;
const sendChatsToUser = async (req, res) => {
    try {
        const user = await User_js_1.default.findById(res.locals.jwtData.id);
        if (!user) {
            return res.status(401).json({ message: "User not registered" });
        }
        return res.status(200).json({ chats: user.chats });
    }
    catch (error) {
        return res.status(500).json({ message: "Error fetching chats" });
    }
};
exports.sendChatsToUser = sendChatsToUser;
const deleteChats = async (req, res) => {
    try {
        const user = await User_js_1.default.findById(res.locals.jwtData.id);
        if (!user) {
            return res.status(401).json({ message: "User not registered" });
        }
        user.chats.splice(0, user.chats.length); // Clear the chats array
        await user.save();
        return res.status(200).json({ message: "Chats deleted" });
    }
    catch (error) {
        return res.status(500).json({ message: "Error deleting chats" });
    }
};
exports.deleteChats = deleteChats;
//# sourceMappingURL=chat-controllers.js.map