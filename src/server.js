import express from "express";
import dotenv from "dotenv";

import authRouter from "./routers/auth.router.js";
import messagesRouter from "./routers/messages.route.js";
import connectDB from "./config/db.connections.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Auth
app.use("/api/v1/auth", authRouter);
// Messages
app.use("/api/v1/messages", messagesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
