import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import All from "./allProject";
import Ownproject from "./ownProjects";
import Updates from "./workUpdate";
import About from "./About";
import Signup from "./Signup";
import Login from "./Login";


function App(){

    return(
  <div className="bg-gray-100">
     <Navbar />
     <Home />
     <All/>
     <Ownproject/>
      <Updates/>
      <About />
      <Signup/>
      <Login />

  </div>
);
}
export default App;