const asynchandler = require("express-async-handler")
const Todo = require("../models/Todo")

exports.getAllTodos = asynchandler(async (req, res) => {
    const result = await Todo.find()
    res.status(200).json({ message: "Todo find success", result })
})
exports.addTodos = asynchandler(async (req, res) => {
    await Todo.create(req.body)
    res.json({ message: "Todo add success" })
})
exports.updateTodos = asynchandler(async (req, res) => {
    const { id } = req.params
    await Todo.findByIdAndUpdate(id, req.body)
    res.json({ message: "Todo update success" })
})
exports.deleteTodo = asynchandler(async (req, res) => {
    const { id } = req.params
    await Todo.findByIdAndDelete(id)
    res.json({ message: "Todo update success" })
})