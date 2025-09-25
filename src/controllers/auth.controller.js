//@desc Auth controller
//@route POST /api/v1/auth/signup
//@access Public

export const signup = (req, res) => {
  res.status(200).json({
    success: true,
    message: "You have successfully signed up",
  });
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
