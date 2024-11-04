import React from "react";

function Login(){
    return(
        <div id="login">
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br  px-4 bg-purple-300">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800">Log In</h2>
                <form className="space-y-6">
                    <div>
                     <label className="block text-sm font-medium text-gray-700">Email</label>
                     <input 
                     type="email" 
                     placeholder="Enter email"
                     className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                     />

                    </div>
                    <div>

                  <label className="block text-sm font-medium text-gray-700">Password</label>
                  <input 
                  type="password"
                  placeholder="Enter Password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />

                 </div>

                  <button
                  type="submit"
                  className="w-full px-4 py-2 font-semibold text-white bg-purple-500 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                 Log In
                  </button>
                </form>
                 
                <p className="text-sm text-center text-gray-600">
                   Don't have an account?{" "}
                   <a href="/signup" className="font-medium text-purple-600 hover:underline">
                   Sign Up
                   </a>
                </p>
            </div>
        </div>
        </div>
    );
}

export default Login;