import User from "../models/User.js";
import bcryptjs from "bcryptjs";
import { generateToken } from "../utils/generate.token.js";
import "dotenv/config";
import { sendWelcomeEmail } from "../emails/email.handler.js";

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

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters long.",
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

    const isPhoneNumberTaken = await User.findOne({ phoneNumber });

    if (isPhoneNumberTaken) {
      return res.status(400).json({
        success: false,
        message: "User with this phone number already exists.",
      });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
      phoneNumber,
    });

    if (newUser) {
      await newUser.save();
      generateToken(newUser._id, res);

      res.status(201).json({
        success: true,
        message: "User has been created successfully.",
        data: {
          _id: newUser._id,
          fullName: newUser.fullName,
          email: newUser.email,
          phoneNumber: newUser.phoneNumber,
          profilePicture: newUser.profilePicture,
        },
      });

      try {
        await sendWelcomeEmail(
          newUser.email,
          newUser.fullName,
          process.env.CLIENT_URL
        );
        console.log("Welcome email sent successfully");
      } catch (error) {
        console.error(`Error sending welcome email: ${error.message}`);
      }
    } else {
      return res.status(400).json({
        success: false,
        message: "Failed to create user. Please try again later.",
      });
    }
  } catch (error) {
    console.error(`Error creating new user : ${error.message}`);
    return res.status(500).json({
      success: false,
      message: "Failed to create user. Please try again later.",
      error: error.message,
    });
  }
};

//@desc Auth controller
//@route POST /api/v1/auth/signin
//@access Public

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Provide all required fields to sign in",
      });
    }
    const user = await User.findOne({ email });
    if (!user)
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials provided" });

    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid)
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials provided" });

    generateToken(user._id, res);

    res.status(200).json({
      success: true,
      message: "You have successfully signed in",
      data: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        profilePicture: user.profilePicture,
      },
    });
  } catch (error) {
    console.error(`Error signing in user : ${error.message}`);

    return res.status(500).json({
      success: false,
      message: "Failed to sign in user. Please try again later.",
      error: error.message,
    });
  }
};

//@desc Auth controller
//@route POST /api/v1/auth/signout
//@access Public

export const signout = (req, res) => {
  res.cookie("token", "", {
    maxAge: 0,
  });
  res.status(200).json({
    success: true,
    message: "You have successfully signed out",
  });
};
