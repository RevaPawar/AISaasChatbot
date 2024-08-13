import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
config();
const app = express();
//middlewares
const corsOptions = {
    origin: ["http://localhost:5173", "https://aisaaschatbot-7.onrender.com"], // Add your frontend domain and any other trusted domains
    credentials: true, // Allows cookies to be sent with requests
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type,Authorization",
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
//remove it in production
app.use(morgan("dev"));
app.use("/api", appRouter);
export default app;
//# sourceMappingURL=app.js.map