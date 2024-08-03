// src/components/TaskManager.jsx

import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import '../styles/TaskManager.css'; // Assurez-vous que le chemin est correct

const TaskManager = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (taskTitle) => {
        setTasks([...tasks, { title: taskTitle, completed: false }]);
    };

    const toggleTaskStatus = (taskToToggle) => {
        setTasks(tasks.map(task =>
            task === taskToToggle ? { ...task, completed: !task.completed } : task
        ));
    };

    const deleteTask = (taskToDelete) => {
        if (window.confirm('Êtes-vous sûr de vouloir supprimer cette tâche ?')) {
            setTasks(tasks.filter(task => task !== taskToDelete));
        }
    };

    return (
        <div className="task-manager">
            <h1 className="title">Ma Liste de Tâches</h1>
            <div className="task-form">
                <TaskForm onAddTask={addTask} />
            </div>
            <div className="task-list">
                <TaskList tasks={tasks} onToggleStatus={toggleTaskStatus} onDelete={deleteTask} />
            </div>
        </div>
    );
};

export default TaskManager;
