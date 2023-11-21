const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      default: false
    },
  },
  { timestamps: true }
)

const Todo = new mongoose.model("Todo", todoSchema);

module.exports = Todo;