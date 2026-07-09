import {
  Button,
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

export default function TaskCard({ task, onEdit, onDelete, onStatusChange }) {
  return (
    <Card sx={{ borderRadius: 3, height: "100%" }}>
      <CardContent>
        <Chip
          label={task.status}
          color={
            task.status === "Completed"
              ? "success"
              : task.status === "In Progress"
                ? "info"
                : "warning"
          }
          clickable
          onClick={() => onStatusChange(task)}
          sx={{ mb: 2 }}
        />

        <Typography variant="h6" gutterBottom>
          {task.title}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          {task.description}
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={() => onEdit(task)}>
            Update
          </Button>

          <Button
            variant="outlined"
            color="error"
            onClick={() => onDelete(task._id)}
          >
            Delete
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
