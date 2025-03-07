import mongoose from "mongoose";

const taskSchemea = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Task name is required!"],
    trim: true,
    maxLength: [20, "Task name can not be more than 20 characters!"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

export const Task = mongoose.model("Task", taskSchemea);
