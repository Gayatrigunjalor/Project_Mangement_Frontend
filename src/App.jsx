import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import Outside from "./outsideProject";
import All from "./allProject";
import Ownproject from "./ownProjects";
import Updates from "./workUpdate";
import About from "./About";

function App(){

    return(
  <div className="bg-gray-100">
     <Navbar />
     <Home />
     <Outside/>
     <All/>
     <Ownproject/>
      <Updates/>
      <About />

  </div>
);
}
export default App;