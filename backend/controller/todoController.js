const Todo = require('../model/todo');

exports.getTodos = async (req, res) => {
  const todos = await Todo.find({ user: req.user.id });
  res.json(todos);
};

exports.addTodo = async (req, res) => {
  const { title } = req.body;
  const todo = await Todo.create({ user: req.user.id, title });
  res.status(201).json(todo);
};

exports.deleteTodo = async (req, res) => {
  const todo = await Todo.findByIdAndDelete(req.params.id);
  if (!todo || todo.user.toString() !== req.user.id) {
    return res.status(404).json({ error: 'Not found' });
  }
  // await todo.remove();
  res.json({ message: 'Todo deleted' });
};
