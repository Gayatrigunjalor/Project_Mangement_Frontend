import React, { useState } from 'react';

const CreateTaskForm = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    taskName: '',
    description: '',
    status: 'Pending',
    createdAt: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Task Created:', formData);
    // You can add your API request here to save the task data
  };

  return (
   <div id='create-task'>
    <div className="create-task-form max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Create Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div>
          <label htmlFor="projectName" className="block text-sm font-medium text-gray-700">
            Project Name
          </label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="taskName" className="block text-sm font-medium text-gray-700">
            Task Name
          </label>
          <input
            type="text"
            id="taskName"
            name="taskName"
            value={formData.taskName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div>
          <label htmlFor="createdAt" className="block text-sm font-medium text-gray-700">
            Created At
          </label>
          <input
            type="date"
            id="createdAt"
            name="createdAt"
            value={formData.createdAt}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Create Task
        </button>
      </form>
    </div>
    </div>
  );
};

export default CreateTaskForm;
