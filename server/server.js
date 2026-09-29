import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/task.routes.js";
dotenv.config();
const app = express();

// Connect Database
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Middlewares
app.use(
  cors({
    origin: "*",
    credentials: true,
  }),
);

app.get("/", (req, res) => {
  res.json({ message: "Task Management API is running" });
});

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
