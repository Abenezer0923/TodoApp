import React, { useState } from "react";

interface TodoProps {
  text: string;
  onDelete: () => void;
  onEdit: (newText: string) => void;
}

const Todo: React.FC<TodoProps> = ({ text, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const saveEditing = () => {
    onEdit(editedText);
    setIsEditing(false);
  };

  return (
    <div className="bg-orange-200 rounded-lg p-4 my-4">
      {isEditing ? (
        <div className="flex items-center">
          <input
            className="bg-white border rounded p-2 mr-2"
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
            onClick={saveEditing}
          >
            Save
          </button>
        </div>
      ) : (
        <div className="flex items-center">
          <p className="text-gray-800 mr-4">{text}</p>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            onClick={onDelete}
          >
            Delete
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded ml-4"
            onClick={handleEdit}
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default Todo;
