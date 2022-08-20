const express = require("express");
const {
  getGoals,
  createGoals,
  updateGoal,
  deleteGoals,
} = require("../controllers/goalsController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").get(protect, getGoals).post(protect, createGoals);
router.route("/:id").delete(protect, deleteGoals).patch(protect, updateGoal);

module.exports = router;
