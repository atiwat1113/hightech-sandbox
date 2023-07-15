const Task = require("../models/Task");

exports.getTask = async (req, res) => {
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
};

exports.createTask = async (req, res) => {
  const newTask = await Task.create(req.body);
  res.status(201).json({
    success: true,
    data: newTask,
  });
};

exports.updateTask = async (req, res) => {
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
};

exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(400).json({ success: false });
  }
};
