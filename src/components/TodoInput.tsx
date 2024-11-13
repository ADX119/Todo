import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { useTodoContext } from '../context/TodoContext';

const TodoInput = () => {
  const [text, setText] = useState('');
  const { addTodo, editingTodo, updateTodo, cancelEditing } = useTodoContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    if (editingTodo) {
      updateTodo(editingTodo.id, text);
      cancelEditing();
    } else {
      addTodo(text);
    }
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={editingTodo ? "Edit todo..." : "What needs to be done?"}
          className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-200 transition-all duration-200 flex items-center gap-2"
        >
          <PlusCircle className="w-5 h-5" />
          <span>{editingTodo ? 'Update' : 'Add'}</span>
        </button>
      </div>
    </form>
  );
};

export default TodoInput;