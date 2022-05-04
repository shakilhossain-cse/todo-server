const taskModel = require("../models/task.model");


const getAllTask = async (req, res) => {

    try {

        const task = await taskModel.find({});
        res.status(200).json({ task })

    } catch (error) {

        res.status(500).json({ msg: error })

    }
}


const createNewTask = async (req, res) => {

    try {

        const task = await taskModel.create(req.body)
        res.status(201).json({ task })

    } catch (error) {

        res.status(500).json({ msg: error })

    }
}


const getSingleTask = async (req, res) => {

    try {

        const { id: taskId } = req.params;
        const task = await taskModel.findOne({ _id: taskId })
        if (!task) {
            return res.status(404).json({ msg: `Task is not found with this id ${taskId}` })
        }
        res.status(200).json({ task });

    } catch (error) {

        res.status(500).json({ msg: error });

    }

}
const updateTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await taskModel.findOneAndUpdate({ _id: taskID }, req.body, { new: true, runValidators: true })
        if (!task) {
            return res.status(404).json({ msg: `Your task id:${taskID} is not found for update` })
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}


const deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await taskModel.findOneAndDelete({ _id: taskID });
        if (!task) {
            return res.status(404).json({ msg: `Your task id: ${taskID} is not found for delate` })
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

module.exports = { getAllTask, createNewTask, getSingleTask, updateTask, deleteTask }