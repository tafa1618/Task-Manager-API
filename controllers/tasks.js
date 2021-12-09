const getAllTasks = (req, res) => {
  res.send('All items from controllers');
};
const createTasks = (req, res) => {
  res.send('Create Task');
};
const getTasks = (req, res) => {
  res.json({ id: req.params.id });
};
const updateTasks = (req, res) => {
  res.send('uodating task');
};
const deleteTasks = (req, res) => {
  res.send('delete tasks');
};

module.exports = {
  getAllTasks,
  createTasks,
  getTasks,
  updateTasks,
  deleteTasks,
};
