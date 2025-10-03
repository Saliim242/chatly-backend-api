import jwt from "jsonwebtoken";
import User from "../models/User.js";
import "dotenv/config";

export const protectedRoute = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token)
      return res.status(400).json({
        success: false,
        message: "Unauthorized access - no token provided",
      });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded)
      return res.status(400).json({
        success: false,
        message: "Unauthorized access - invalid token",
      });

    const user = await User.findById(decoded._id);

    if (!user)
      return res.status(400).json({
        success: false,
        message: "Unauthorized access - user not found",
      });

    req.user = user;

    next();
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
