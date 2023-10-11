const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  task: {
    type: String,
    required: true,
  },
  taskCompleted: {
    type: Boolean,
  },
});

const todoModel = new mongoose.model("todoModel", todoSchema);

module.exports = todoModel;
