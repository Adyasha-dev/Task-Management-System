import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

export default function TaskDialog({
  open,
  handleClose,
  task,
  formData,
  setFormData,
  onSubmit,
  loading,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>{task ? "Update Task" : "Create Task"}</DialogTitle>

      <DialogContent>
        <TextField
          name="title"
          label="Title"
          fullWidth
          margin="normal"
          value={formData.title}
          onChange={handleChange}
        />

        <TextField
          name="description"
          label="Description"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={formData.description}
          onChange={handleChange}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} disabled={loading}>
          Cancel
        </Button>

        <Button variant="contained" onClick={onSubmit} disabled={loading}>
          {loading ? "Saving..." : task ? "Update" : "Create"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
