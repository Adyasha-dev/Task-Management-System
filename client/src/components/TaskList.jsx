import { Grid, Typography } from "@mui/material";
import TaskCard from "./TaskCard";

export default function TaskList({ tasks, onEdit, onDelete, onStatusChange }) {
  if (!tasks.length) {
    return (
      <Typography align="center" mt={5}>
        No tasks found
      </Typography>
    );
  }

  return (
    <Grid container spacing={3}>
      {tasks?.map((task) => (
        <Grid item xs={12} sm={6} md={4} key={task._id}>
          <TaskCard
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
            onStatusChange={onStatusChange}
          />
        </Grid>
      ))}
    </Grid>
  );
}
