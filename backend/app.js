const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const taskRouter = require("./routes/task");
const express = require("express");
const app = express();
const port = 8000;

// Load env nars
dotenv.config({
  path: "./config/.env",
});

// Body Parser
app.use(express.json());

// Enable CORS
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/tasks", taskRouter);

app.listen(port, async () => {
  await connectDB();
  console.log(`Example app listening on port ${port}`);
});
