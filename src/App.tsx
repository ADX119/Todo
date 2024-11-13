// import React from 'react';
// import { PlusCircle, CheckCircle2, Circle, Trash2, Edit3 } from 'lucide-react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import { TodoProvider } from './context/TodoContext';

function App() {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100">
        <div className="container mx-auto px-4 py-12 max-w-3xl">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Taskflow
            </h1>
            <p className="text-gray-600">"Stay Organized, Stay Productive – One Task at a Time!"</p>
          </header>
          
          <TodoInput />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;