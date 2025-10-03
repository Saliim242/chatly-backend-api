import express from "express";

const route = express.Router();

import {
  signup,
  signin,
  signout,
  updateProfile,
} from "../controllers/auth.controller.js";
import { protectedRoute } from "../middlewares/auth.middleware.js";

route.post("/signup", signup);

route.post("/signin", signin);

route.post("/signout", signout);

route.post("/update-profile", protectedRoute, updateProfile);
route.get("/check", protectedRoute, (req, res) => {
  res.status(200).json({
    success: true,
    message: "You are authenticated",
    data: req.user,
  });
});

export default route;
