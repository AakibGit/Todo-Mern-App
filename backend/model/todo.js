const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model('Todo', TodoSchema);
