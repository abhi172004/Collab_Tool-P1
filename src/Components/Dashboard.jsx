import React, { useState } from 'react';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskContent, setTaskContent] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

  const handleAddTask = () => {
    if (taskTitle.trim() && taskContent.trim()) {
      if (isEditing) {
        const updatedTasks = tasks.map((task, index) =>
          index === currentTaskIndex ? { title: taskTitle, content: taskContent } : task
        );
        setTasks(updatedTasks);
        setIsEditing(false);
        setCurrentTaskIndex(null);
      } else {
        setTasks([...tasks, { title: taskTitle, content: taskContent }]);
      }
      setTaskTitle('');
      setTaskContent('');
    }
  };

  const handleEditTask = (index) => {
    setTaskTitle(tasks[index].title);
    setTaskContent(tasks[index].content);
    setIsEditing(true);
    setCurrentTaskIndex(index);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      <div className="bg-gray-300  p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Tasks</h2>
        <div className="mb-4">
          <input 
            className="w-full p-2 border border-gray-300 rounded mt-1"
            type="text" 
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder='Title'
          />
          <textarea
            value={taskContent}
            onChange={(e) => setTaskContent(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Content"
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-500 text-white p-2 rounded mt-2"
          >
            {isEditing ? 'Update Task' : 'Add Task'}
          </button>
        </div>
        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li key={index} className="mb-2 p-2 border border-gray-300 rounded">
              <h3 className="font-bold">{task.title}</h3>
              <p>{task.content}</p>
              <button
                onClick={() => handleEditTask(index)}
                className="bg-yellow-500 text-white p-1 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteTask(index)}
                className="bg-red-500 text-white p-1 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* Additional cards can be added here */}
    </div>
  );
};

export default Dashboard;
