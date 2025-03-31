import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Todos</h2>
      <div className="space-y-4">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center justify-between bg-gray-100 p-4 rounded-md shadow-md"
          >
            <h3 className="text-lg font-medium">{todo.title}</h3>
            <button
              onClick={() => handleRemove(todo.id)}
              className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todos;
