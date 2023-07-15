const {
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/task");
const express = require("express");
const router = express.Router();

router.route("/").post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
