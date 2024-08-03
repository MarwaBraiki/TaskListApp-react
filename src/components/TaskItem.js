import React from 'react';
import '../styles/TaskItem.css'; // Assurez-vous que le chemin est correct

const TaskItem = ({ task, onToggleStatus, onDelete }) => {
    return (
        <div className="task-item">
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.title}
            </span>
            <div>
                <button
                    className="btn-validate"
                    onClick={() => onToggleStatus(task)}
                >
                    {task.completed ? 'Reinvalider' : 'Valider'}
                </button>
                <button
                    className="btn-delete"
                    onClick={() => onDelete(task)}
                >
                    Supprimer
                </button>
            </div>
        </div>
    );
};

export default TaskItem;
