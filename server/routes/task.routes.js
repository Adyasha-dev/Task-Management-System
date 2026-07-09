import express from "express";
import {
  createTask,
  getTasks,
  getSingleTask,
  updateTask,
  changeTaskStatus,
  deleteTask,
} from "../controllers/taskController.js";
import protect from "../middleware/authMiddleware.js";
const router = express.Router();
//Create Task
router.post("/createTask", protect, createTask);
// Get All Tasks
router.get("/getTasks", protect, getTasks);

//Get Single Task
router.get("/getTask/:id", protect, getSingleTask);
// Update Title & Description
router.put("/:id", protect, updateTask);
// Change Status
router.patch("/:id/status", protect, changeTaskStatus);
// Delete Task
router.delete("/:id", protect, deleteTask);
export default router;
