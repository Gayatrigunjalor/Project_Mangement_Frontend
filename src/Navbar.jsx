import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-900 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-lg font-semibold">Project Management System</h1>
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-200">
            Home
          </Link>
          <Link to="/projects" className="text-white hover:text-gray-200">
            Projects
          </Link>
          <Link to="/signup" className="text-white hover:text-gray-200">
            Signup
          </Link>
          <Link to="/login" className="text-white hover:text-gray-200">
            Login
          </Link>
          <Link to="/create-project" className="text-white hover:text-gray-200">
            Create Project
          </Link>
          <Link to="/create-task" className="text-white hover:text-gray-200">
            Create Task
          </Link>
          <Link to="/assign-task" className="text-white hover:text-gray-200">
            Assign Task
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
