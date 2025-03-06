import mongoose from 'mongoose';

const taskSchemea = new mongoose.Schema({
    name: String,
    completed: Boolean,
})

export const Task = mongoose.model('Task', taskSchemea);