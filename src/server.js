import express from "express";
import dotenv from "dotenv";

import authRouter from "./routers/auth.router.js";
import messagesRouter from "./routers/messages.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Auth
app.use("/api/auth", authRouter);
// Messages
app.use("/api/messages", messagesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
