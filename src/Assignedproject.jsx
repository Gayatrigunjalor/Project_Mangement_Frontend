import React, { useState } from 'react';

const TaskAssignedForm = () => {
  const [formData, setFormData] = useState({
    project: '',
    user: '',
    task: '',
    projectDetails: '',
    userDetails: '',
    taskDetails: '',
    assignedAt: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Task Assigned:', formData);
    // Additional submit logic can be added here, such as an API call.
  };

  return (
   <div id='assign-task'>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Assign Task</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Project</label>
            <input
              type="text"
              name="project"
              value={formData.project}
              onChange={handleChange}
              placeholder="Enter project name"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">User</label>
            <input
              type="text"
              name="user"
              value={formData.user}
              onChange={handleChange}
              placeholder="Enter user name"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Task</label>
            <input
              type="text"
              name="task"
              value={formData.task}
              onChange={handleChange}
              placeholder="Enter task name"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Project Details</label>
            <textarea
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              placeholder="Enter project details"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">User Details</label>
            <textarea
              name="userDetails"
              value={formData.userDetails}
              onChange={handleChange}
              placeholder="Enter user details"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Task Details</label>
            <textarea
              name="taskDetails"
              value={formData.taskDetails}
              onChange={handleChange}
              placeholder="Enter task details"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Assigned At</label>
            <input
              type="date"
              name="assignedAt"
              value={formData.assignedAt}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-purple-500 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Assign Task
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default TaskAssignedForm;
