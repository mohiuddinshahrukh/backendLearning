const asyncHandler = require("express-async-handler");
const Goal = require("../model/goalModel");
const User = require("../model/userModel");
//@desc Get Goals
//@route Get /api/goals
//@access private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
  res.status(200).json(goals);
});

//@desc Set Goals
//@route Set /api/goals
//@access Private
const setGoals = asyncHandler(async (req, res) => {
  console.log(req.body);
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  });
  res.status(201).json(goal);
});

//@desc Update Goals
//@route Put /api/goals
//@access Private
const updateGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const user = await User.findById(req.user.id);
  // Check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  // Making sure that only the logged in user can update
  if (goal.user.toString() != user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
});

//@desc Delete Goals
//@route Delete /api/goals
//@access Private
const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);

    throw new Error("Goal not found");
  }
  const user = await User.findById(req.user.id);
  // Check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  // Making sure that only the logged in user can update
  if (goal.user.toString() != user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }
  const deletedGoal = await Goal.findByIdAndDelete(req.params.id);
  res.status(200).json(deletedGoal);
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
