import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('connected to mongoDB!');
}).catch((err) => {
    console.log(err);
});

const app = express();
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Simple request logger to help debug incoming requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

// Mount routes
app.use("/api/user", userRouter);
// Auth routes should be under /api/auth (not /api/user)
app.use("/api/auth", authRouter);

// Start server after routes are mounted
app.listen(3000, () => {
    console.log('server is running on port 3000');
});