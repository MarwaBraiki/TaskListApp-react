// src/components/TaskForm.js
import React, { useState } from 'react';
import '../styles/TaskForm.css'; // Assurez-vous que le chemin est correct

const TaskForm = ({ onAddTask }) => {
    const [taskTitle, setTaskTitle] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (taskTitle.trim()) {
            onAddTask(taskTitle);
            setTaskTitle('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                placeholder="Ajouter une nouvelle tâche"
            />
            <button type="submit">Ajouter une tâche</button>
        </form>
    );
};

export default TaskForm;
