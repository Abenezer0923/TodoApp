import React, {useState} from "react";

interface TodoProps {
    text: string;
    onDelete: () => void;
    onEdit: (newText: string) => void;
}

const Todo: React.FC<TodoProps> = ({text, onDelete, onEdit}) => {
     const [isEdting, setIsEdting] = useState(false);
     const [editedText, setEditedText] = useState(text);

     const handleEdit = () => {
        setIsEdting(true)
     }
     const saveEdting = () => {
        onEdit(editedText);
        setIsEdting(false);
     }
     return (
        <div>
            {isEdting ? (
                <div>
                    <input type="text" value={editedText} onChange={(e) => setEditedText(e.target.value)} />
                    <button onClick={saveEdting}>Save</button>
                </div>
            ):
            <div>
              <p>{text}</p>
              <button onClick={onDelete}>Delete</button>
              <button onClick={handleEdit}>Edit</button>    
            </div>}
        </div>

     )

}
export default Todo;