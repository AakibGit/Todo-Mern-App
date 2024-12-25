const express = require('express');
const { getTodos, addTodo, deleteTodo } = require('../controller/todoController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', protect, getTodos);
router.post('/', protect, addTodo);
router.delete('/:id', protect, deleteTodo);

module.exports = router;
