const express = require("express");
const Task = require("../models/taskModel");
const { createTask, getTasks, getTask, deleteTask, updateTask } = require("../controllers/taskController");
const router = express.Router();


// Create a Task
router.post("/", createTask);

// Get/Read Tasks
router.get("/", getTasks);

//Get a single task
router.get("/:id", getTask)

//Delete Task
router.delete("/:id", deleteTask);

//Update Task
router.put("/:id", updateTask);

module.exports = router