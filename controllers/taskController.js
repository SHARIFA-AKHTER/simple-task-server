const task = require("../models/task");

//Create tasks
const createTasks = async (req,res) =>{
    const newTask = await task.create(req.body);
    res.status(201).json(newTask)
}

const getTasks = async (req,res)=>{
    const tasks = await task.find();
     res.status(201).json(tasks)
}

module.exports = {getTasks, createTasks};