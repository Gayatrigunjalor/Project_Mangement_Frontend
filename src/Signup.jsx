import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "employee", // Default to employee
    adminToken: ""
  });
  const [isAdmin, setIsAdmin] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to show/hide password
  const [showAdminToken, setShowAdminToken] = useState(false); // State to show/hide admin token

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "role" && value === "admin") {
      setIsAdmin(true);
    } else if (name === "role" && value !== "admin") {
      setIsAdmin(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the admin token is required
    if (formData.role === "admin" && !formData.adminToken) {
      alert("Admin token is required for admin accounts.");
      return;
    }

    // Create a new object to send to the backend
    const dataToSubmit = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: formData.role,
    };

    // Only add adminToken if it's provided
    if (formData.role === "admin" && formData.adminToken) {
      dataToSubmit.adminToken = formData.adminToken;
    }

    console.log("Submitting form data:", dataToSubmit);

    try {
      const response = await axios.post(
        "https://project-mangement-system.vercel.app/api/account/register",
        dataToSubmit // Send only necessary fields
      );

      // Reset form data to initial values
      setFormData({
        name: "",
        email: "",
        password: "",
        role: "employee", // Default back to employee
        adminToken: ""
      });
      
      console.log("Response:", response);
      alert("Account created successfully!");
    } catch (error) {
      console.error("Request Error:", error);
      if (error.response) {
        console.error("Error Response Data:", error.response.data);
        alert(`Error: ${error.response.data.message || "An error occurred."}`);
      }
      alert("An error occurred. Please check your input and try again.");
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br px-4 bg-purple-300">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Create an Account
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={handleChange}
              value={formData.name}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"} // Toggle password visibility
                name="password"
                placeholder="Enter Password (min 8 characters)"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                onChange={handleChange}
                value={formData.password}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                onClick={() => setShowPassword(!showPassword)} // Toggle show/hide password
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <select
              name="role"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={handleChange}
              value={formData.role}
            >
              <option value="employee">Employee</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          {isAdmin && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Admin Token</label>
              <div className="relative">
                <input
                  type={showAdminToken ? "text" : "password"} // Toggle token visibility
                  name="adminToken"
                  placeholder="Enter Admin Token"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  onChange={handleChange}
                  value={formData.adminToken}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                  onClick={() => setShowAdminToken(!showAdminToken)} // Toggle show/hide token
                >
                  {showAdminToken ? "Hide" : "Show"}
                </button>
              </div>
            </div>
          )}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-purple-500 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a href="#" className="font-medium text-blue-600 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
