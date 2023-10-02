import React, { useState } from 'react';
import './App.css';
import Lists from './components/List';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, editTodo } from './redux/todoSlice';
import { RootState } from './redux/store';

const App: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState<string>('');

  const addTodoHandler = () => {
    if (newTodo.trim() !== '') {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  const deleteTodoHandler = (index: number) => {
    dispatch(deleteTodo(index));
  };

  const editTodoHandler = (index: number, newText: string) => {
    dispatch(editTodo({ index, newText }));
  };

  return (
    <Router>
      <div className="bg-blue-500 w-full min-h-screen p-4">
        <h1 className='text-red-200 text-4xl mb-4 text-center'>Todo List</h1>
        
        <div className='flex items-center justify-center mb-4'>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className='rounded-sm px-2 py-1 border border-gray-400 mr-2'
        />
        <button className='bg-red-200 rounded px-2 py-1 text-white' onClick={addTodoHandler}>Add</button>
        </div>
        <Routes>
          <Route
            path="/"
            element={<Lists todos={todos} onDelete={deleteTodoHandler } onEdit={editTodoHandler} />}
          />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
