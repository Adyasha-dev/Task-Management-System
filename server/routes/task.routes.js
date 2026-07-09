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

router.post("/createTask", protect, createTask);
router.get("/getTasks", protect, getTasks);
router.get("/getTask/:id", protect, getSingleTask);
router.put("/:id", protect, updateTask);
router.patch("/:id/status", protect, changeTaskStatus);
router.delete("/:id", protect, deleteTask);

export default router;
