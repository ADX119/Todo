// import React from 'react';
import { useTodoContext } from '../context/TodoContext';
import { CheckCircle2, Circle, Trash2, Edit3 } from 'lucide-react';

const TodoList = () => {
  const { todos, toggleTodo, deleteTodo, startEditing } = useTodoContext();

  if (todos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No tasks yet. Add one to get started!</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="group flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
        >
          <button
            onClick={() => toggleTodo(todo.id)}
            className="text-gray-400 hover:text-indigo-600 transition-colors"
          >
            {todo.completed ? (
              <CheckCircle2 className="w-6 h-6 text-green-500" />
            ) : (
              <Circle className="w-6 h-6" />
            )}
          </button>
          
          <span
            className={`flex-1 text-gray-700 ${
              todo.completed ? 'line-through text-gray-400' : ''
            }`}
          >
            {todo.text}
          </span>
          
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => startEditing(todo)}
              className="p-1 hover:text-indigo-600 transition-colors"
            >
              <Edit3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="p-1 hover:text-red-600 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;