import React from 'react';
import TaskItem from './TaskItem'; // Assurez-vous que le chemin est correct
import '../styles/TaskList.css'; // Assurez-vous que le chemin est correct

const TaskList = ({ tasks, onToggleStatus, onDelete }) => {
    return (
        <div className="task-list">
            {tasks.map((task, index) => (
                <TaskItem
                    key={index}
                    task={task}
                    onToggleStatus={onToggleStatus}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default TaskList;
