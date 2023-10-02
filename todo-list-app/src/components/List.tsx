import React from 'react';
import Todo from './Todo';

interface TodoListProps {
  todos: string[];
  onDelete: (index: number) => void;
  onEdit: (index: number, newText: string) => void;
}

const Lists: React.FC<TodoListProps> = ({ todos, onDelete, onEdit }) => {
  return (
    <div className='text-red-200'>
      {todos.map((todo, index) => (
        <div key={index} className='border p-2 mb-2 rounded-lg shadow-md bg-white'>
          {/* Applied some styling to each todo item */}
          <Todo
            text={todo}
            onDelete={() => onDelete(index)}
            onEdit={(newText) => onEdit(index, newText)}
          />
        </div>
      ))}
    </div>
  );
};

export default Lists;
