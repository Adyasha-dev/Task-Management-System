require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const app = express();
console.log(process.env.MONGODB_URI);
// Connect Database
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());
// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
