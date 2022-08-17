const asyncHandler = require("express-async-handler");
const getGoals = asyncHandler((req, res) => {
  res.status(200).json({ message: "get goals" });
});
const createGoals = asyncHandler((req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  //   res.status(200).json({ message: "create goals" });
});
const updateGoal = asyncHandler((req, res) => {
  res.status(200).json({ message: `Update goals ${req.params.id}` });
});
const deleteGoals = asyncHandler((req, res) => {
  res.status(200).json({ message: `delete goals ${req.params.id}` });
});
module.exports = {
  getGoals,
  createGoals,
  updateGoal,
  deleteGoals,
};
