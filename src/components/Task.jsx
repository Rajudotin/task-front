import React, { useState, useEffect } from "react";
import "../styles/task.css"; // Assuming you have a CSS file for styles
const Task = ({ text, isCompleted, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  useEffect(() => {
    setEditedText(text);
  }, [text]);

  const handleSave = () => {
    const trimmedText = editedText.trim();
    if (trimmedText && trimmedText !== text) {
      onEdit(trimmedText);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSave();
    } else if (e.key === "Escape") {
      setIsEditing(false);
      setEditedText(text);
    }
  };

  return (
    <div className="task-item">
      <input type="checkbox" checked={isCompleted} onChange={onToggle} />

      <div>
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        ) : (
          <span onDoubleClick={() => setIsEditing(true)}>{text}</span>
        )}
      </div>

      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}

      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Task;
