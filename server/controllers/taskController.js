import Task from "../models/Task.model.js";
//Create Task
export const createTask = async (req, res) => {
  console.log("User:", req.user);
  try {
    const { title, description } = req.body;

    const task = await Task.create({
      title,
      description,
      createdBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Task created successfully",
      task,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
//Get All Task
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
      createdBy: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: tasks.length,
      tasks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
//Get Single Task
export const getSingleTask = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      createdBy: req.user.id,
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    res.status(200).json({
      success: true,
      task,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
//Update Task
export const updateTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    const task = await Task.findOneAndUpdate(
      {
        _id: req.params.id,
        createdBy: req.user.id,
      },
      {
        title,
        description,
      },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Task updated",
      task,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
//Delete Task
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user.id,
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Task deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const changeTaskStatus = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      createdBy: req.user.id,
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    if (task.status === "Pending") {
      task.status = "In Progress";
      await task.save();
    } else if (task.status === "In Progress") {
      task.status = "Completed";
      await task.save();
    }

    res.status(200).json({
      success: true,
      message: "Task status updated",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
