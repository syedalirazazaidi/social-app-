const express = require("express");
const {
  getGoals,
  createGoals,
  updateGoal,
  deleteGoals,
} = require("../controllers/goalsController");

const router = express.Router();

router.route("/").get(getGoals).post(createGoals);
router.route("/:id").delete(deleteGoals).put(updateGoal);

module.exports = router;
