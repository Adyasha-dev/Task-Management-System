import { useEffect, useState } from "react";
import { Box, Button, Container } from "@mui/material";

import Navbar from "../components/Navbar";
import TaskList from "../components/TaskList.jsx";
import TaskDialog from "../components/TaskDialog.jsx";

import {
  getTasks,
  createTask,
  updateTask,
  changeTaskStatus,
  deleteTask,
} from "../api/taskApis";

const initialFormData = {
  title: "",
  description: "",
};

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);

  // Fetch all tasks
  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data?.tasks || []);
    } catch (error) {
      console.log("Get tasks error:", error);
    }
  };

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await getTasks();
        setTasks(data?.tasks || []);
      } catch (error) {
        console.log("Get tasks error:", error);
      }
    };

    loadTasks();
  }, []);

  // Open create dialog
  const handleOpenCreate = () => {
    setSelectedTask(null);
    setFormData(initialFormData);
    setOpen(true);
  };

  // Open edit dialog
  const handleOpenEdit = (task) => {
    setSelectedTask(task);
    setFormData({
      title: task.title,
      description: task.description,
    });
    setOpen(true);
  };

  // Close dialog
  const handleClose = () => {
    setOpen(false);
    setSelectedTask(null);
    setFormData(initialFormData);
  };

  // Create / Update Task
  const handleSubmitTask = async () => {
    if (!formData.title.trim()) return;

    try {
      setLoading(true);

      if (selectedTask) {
        await updateTask(selectedTask._id, formData);
      } else {
        await createTask(formData);
      }

      await fetchTasks();
      handleClose();
    } catch (error) {
      console.log("Submit task error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Delete Task
  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      await fetchTasks();
    } catch (error) {
      console.log("Delete task error:", error);
    }
  };

  // Change Task Status
  const handleChangeStatus = async (task) => {
    try {
      await changeTaskStatus(task._id);
      await fetchTasks();
    } catch (error) {
      console.log("Change status error:", error);
    }
  };

  return (
    <>
      <Navbar />

      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Box display="flex" justifyContent="flex-end" mb={4}>
          <Button variant="contained" onClick={handleOpenCreate}>
            Add Task
          </Button>
        </Box>

        <TaskList
          tasks={tasks}
          onEdit={handleOpenEdit}
          onDelete={handleDeleteTask}
          onStatusChange={handleChangeStatus}
        />
      </Container>

      <TaskDialog
        open={open}
        handleClose={handleClose}
        task={selectedTask}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmitTask}
        loading={loading}
      />
    </>
  );
}
