import { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from '../components/TodoItem';
import Navbar from '../components/Navbar';
import {baseURL} from '../utils/api'

const TodosPage = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const todoUrl = `${baseURL}/api/todos`;

  const fetchTodos = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get(todoUrl, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setTodos(response.data);
  };

  const handleAddTodo = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.post(
      todoUrl,
      { title: newTodo },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setTodos([...todos, response.data]);
    setNewTodo('');
  };

  const handleDeleteTodo = async (id) => {
    const token = localStorage.getItem('token');
    await axios.delete(`${todoUrl}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="max-w-lg mx-auto my-6">
        <div className="flex space-x-2">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add new todo"
            className="flex-1 p-2 border rounded"
          />
          <button onClick={handleAddTodo} className="bg-blue-500 text-white px-4 py-2 rounded">
            Add
          </button>
        </div>
        <div className="mt-4 space-y-2">
          {todos.map((todo) => (
            <TodoItem key={todo._id} todo={todo} onDelete={handleDeleteTodo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodosPage;
