const TodoItem = ({ todo, onDelete }) => (
    <div className="flex justify-between items-center p-4 border rounded shadow">
      <span>{todo.title}</span>
      <button onClick={() => onDelete(todo._id)} className="text-red-500 hover:underline">
        Delete
      </button>
    </div>
  );
  
  export default TodoItem;
  