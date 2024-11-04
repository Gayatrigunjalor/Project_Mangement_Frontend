import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Navbar from "./Navbar";
import All from "./allProject";
import Signup from "./Signup";
import Login from "./Login";
import CreateProjectForm from "./projectCreate";
import CreateTaskForm from "./taskCreate";
import TaskAssignedForm from "./Assignedproject";

function App() {
  return (
    <Router>
      <div className="bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<All />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-project" element={<CreateProjectForm />} />
          <Route path="/create-task" element={<CreateTaskForm />} />
          <Route path="/assign-task" element={<TaskAssignedForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
