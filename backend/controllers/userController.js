const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");

// @desc Register a new User
// @route POST /api/user
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  res.json({
    message: "Register User",
  });
});

// @desc Authenticate a User
// @route POST /api/user/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  res.json({
    message: "Login User",
  });
});

// @desc Get User Data
// @route POST /api/user
// @access Public
const getUser = asyncHandler(async (req, res) => {
  res.json({
    message: "Get the User data",
  });
});
module.exports = {
  registerUser,
  getUser,
  loginUser,
};
