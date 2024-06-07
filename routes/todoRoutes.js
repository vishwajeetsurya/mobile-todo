const { getAllTodos, updateTodos, deleteTodo, addTodos } = require("../controller/todoController")

const router = require("express").Router()

router
    .get("/", getAllTodos)
    .post("/", addTodos)
    .put("/:id", updateTodos)
    .delete("/:id", deleteTodo)

module.exports = router