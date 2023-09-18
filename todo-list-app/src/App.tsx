import React, { useState } from 'react';
import './App.css';
import Lists from './components/List';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Pages/Home'; // Correct import path
import About from './Pages/About'; // Correct import path

const App: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const deleteTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const editTodo = (index: number, newText: string) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = newText;
    setTodos(updatedTodos);
  };

  return (
    <Router>
      <div className="App">
        <h1>Todo List</h1>
        <nav>
          <Link to="/home">Home</Link> | <Link to="/about">About</Link>
        </nav>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
        <Routes>
        <Route
          path="/"
          element={<Lists todos={todos} onDelete={deleteTodo} onEdit={editTodo} />}
        />
        <Route path="/about" element={<About />}  />
        <Route path='/home' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
