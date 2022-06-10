const Task = require("../models/Tasks");
const asyncWrapper = require("../middleware/async");

// get
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const getTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });

  if (!task) {
    return res.status(404).json({ msg: `No task zith id :${taskID}` });
  }
  res.status(200).json({ task });
});
// post
const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.json({ task });
});
// patch

// patch
const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return res.status(404).json({ msg: `No task zith id :${taskID}` });
  }
  res.status(200).json(`Task ${task.name} has been deleted`);
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate(
    {
      _id: taskID,
    },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!task) {
    return res.status(404).json({ msg: `No task zith id :${taskID}` });
  }
  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
