import express from "express";

const route = express.Router();

route.get("/signup", (req, res) => {
  res.status(200).json({
    success: true,
    message: "You have successfully signed up",
  });
});

route.get("/signin", (req, res) => {
  res.status(200).json({
    success: true,
    message: "You have successfully signed in",
  });
});

route.get("/signout", (req, res) => {
  res.status(200).json({
    success: true,
    message: "You have successfully signed out",
  });
});

export default route;
