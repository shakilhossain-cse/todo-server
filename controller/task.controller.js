const { createCustomError } = require("../errors/custom.error");
const asyncWrapper = require("../middleware/async");
const taskModel = require("../models/task.model");

const getAllTask = asyncWrapper(async (req, res) => {
  const task = await taskModel.find({});
  res
    .status(200)
    .json({ status: "success", data: { task, nbHits: task.length } });
});

const createNewTask = asyncWrapper(async (req, res) => {
  const task = await taskModel.create(req.body);
  res.status(201).json({ msg: "Task Added" });
});

const getSingleTask = asyncWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await taskModel.findOne({ _id: taskId });
  if (!task) {
    return next(
      createCustomError(`Task is not found with this id ${taskId}`, 404)
    );
  }
  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await taskModel.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(
      createCustomError(`Task is not found with this id ${taskID}`, 404)
    );
  }
  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await taskModel.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(
      createCustomError(`Task is not found with this id ${taskID}`, 404)
    );
  }
  res.status(200).json({ msg: "Task Deleted" });
});

module.exports = {
  getAllTask,
  createNewTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
