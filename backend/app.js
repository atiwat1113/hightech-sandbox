const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const Task = require("./models/Task");
const express = require("express");
const app = express();
const port = 8000;

// Load env nars
dotenv.config({
  path: "./config/.env",
});

//Connect to database
connectDB();

// Body Parser
app.use(express.json());

// Enable CORS
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/tasks", async (req, res) => {
  const tasks = await Task.find();

  res.status(200).json({
    success: true,
    data: tasks,
  });
});

app.get("/tasks/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    return res.status(400).json({
      success: false,
      message: "data not found",
    });
  }

  res.status(200).json({
    success: true,
    data: task,
  });
});

app.post("/tasks", async (req, res) => {
  const newTask = await Task.create(req.body);
  res.status(201).json({
    success: true,
    data: newTask,
  });
});

app.patch("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      data: task,
    });

    if (!task) {
      return res
        .status(400)
        .json({ success: false, message: "data not found" });
    }
  } catch (err) {
    res.status(400).json({ success: false });
  }
});

app.delete("/tasks/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(400).json({ success: false });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
