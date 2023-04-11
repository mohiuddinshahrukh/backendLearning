const asyncHandler = require('express-async-handler');

//@desc Get Goals
//@route Get /api/goals
//@access private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get Goals" })
})

//@desc Set Goals
//@route Set /api/goals
//@access Private
const setGoals = asyncHandler(async (req, res) => {
    console.log(req.body);
    if (!req.body.text) {
        res.status(400)
        throw new Error("Please add a text field");
    }
    res.status(201).json({ message: "set Goals" })
})

//@desc Update Goals
//@route Put /api/goals
//@access Private
const updateGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ data: `Update Goal ${req.params.id}` });
})

//@desc Delete Goals
//@route Delete /api/goals
//@access Private
const deleteGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ data: `Delete Goal ${req.params.id}` });
})

module.exports = {
    getGoals, setGoals, updateGoals, deleteGoals
}