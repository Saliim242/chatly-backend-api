import express from "express";

const route = express.Router();

route.get("/send", (req, res) => {
  res.status(200).json({
    success: true,
    message: "You have successfully sent a message",
  });
});

route.get("/receive", (req, res) => {
  res.status(200).json({
    success: true,
    message: "You have successfully received a message",
  });
});

route.get("/delete", (req, res) => {
  res.status(200).json({
    success: true,
    message: "You have successfully deleted a message",
  });
});

export default route;
