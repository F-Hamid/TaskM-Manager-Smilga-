// get
const getAllTasks = (req, res) => {
  res.send("All tasks");
};

const getTask = (req, res) => {
  res.send(req.params);
};
// post
const createTask = (req, res) => {
  res.json(req.body);
};

// patch
const updateTask = (req, res) => {
  res.send("Update task");
};
// patch
const deleteTask = (req, res) => {
  res.send("delete task");
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
