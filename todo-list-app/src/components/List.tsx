import React from 'react';
import Todo from './Todo';

interface TodoListProps {
    todos: string[];
    onDelete: (index: number) => void;
    onEdit: (index: number, newText: string) => void;
}

const Lists: React.FC<TodoListProps> = ({todos, onDelete, onEdit}) => {
    return (
        <div>
            {todos.map((todo, index) => (
                <Todo
                    key={index}
                    text={todo}
                    onDelete={() => onDelete(index)}
                    onEdit={(newText) => onEdit(index, newText)}
                />
      ))}
        </div>
    )
}

export default Lists;