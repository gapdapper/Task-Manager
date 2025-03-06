import {Task} from '../models/Task.js';

export const getAllTasks = (req, res) => {
    res.send('All items');
}

export const createTask = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task });
}

export const getTask = (req, res) => {
    res.send('Single item');
}

export const updateTask = (req, res) => {
    res.send('Update item');
}

export const deleteTask = (req, res) => {
    res.send('Delete item');
}
