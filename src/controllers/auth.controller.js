import User from "../models/User.js";
import bcryptjs from "bcryptjs";

//@desc Auth controller
//@route POST /api/v1/auth/signup
//@access Public

export const signup = async (req, res) => {
  const { fullName, email, password, phoneNumber } = req.body;
  try {
    if (!fullName || !email || !password || !phoneNumber) {
      return res.status(400).json({
        success: false,
        message: "Provide all required fields",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format provided.",
      });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        success: false,
        message: "User with this email already exists.",
      });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
      phoneNumber,
    });

    return res.status(201).json({
      success: true,
      message: "User has been created successfully.",
      data: newUser,
    });
  } catch (error) {
    console.error(`Error creating new user : ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Failed to create user. Please try again later.",
      error: error.message,
    });
  }
};

//@desc Auth controller
//@route POST /api/v1/auth/signin
//@access Public

export const signin = (req, res) => {
  res.status(200).json({
    success: true,
    message: "You have successfully signed in",
  });
};

//@desc Auth controller
//@route POST /api/v1/auth/signout
//@access Public

export const signout = (req, res) => {
  res.status(200).json({
    success: true,
    message: "You have successfully signed out",
  });
};
