const mongoose = require('mongoose');
const Todo = require('../model/todo');

const addTodo = async(req, res) => {
    try {
        const todoName = req.body.name;
        if(todoName.trim() === '') {
            return res.status(400).json({
                message: 'Please add todo'
            });
        }
        const todo = await new Todo(req.body);
        await todo.save();
        return res.status(201).json({
            message: 'Todo created successfully',
            todo
        })
    } catch(error) {
        return res.status(500).json({
            message: "Some error in adding the task"
        })
    }
}

const getTodos = async(req, res) => {
    try {
        const todos = await Todo.find();
        return res.status(200).json({
            success: true,
            todos
        })
    } catch(error) {
        return res.status(500).json({
            message: "Some error in getting the todos"
        })
    }
}

const deleteTodo = async(req, res) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
        if(!deletedTodo) {
            return res.status(404).json({
                message: 'Todo not found',
            })
        }
        return res.status(200).json({
            message: 'Todo deleted',
        })
    } catch(error) {
        return res.status(500).json({
            message: "Some error in deleting todo"
        })
    }
}

const updateTodo = async(req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if(!updatedTodo) {
            return res.status(404).json({
                message: "Todo not found",
            })
        }
        return res.status(200).json({
            message: "Todo updated",
            todo: updatedTodo
        })
    } catch(error) {
        return res.status(500).json({
            message: "Some error in updating todo"
        })
    }
}

module.exports = {
    addTodo,
    getTodos,
    updateTodo,
    deleteTodo
}