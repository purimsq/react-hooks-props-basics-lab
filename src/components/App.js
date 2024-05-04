import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import props from "../data/user";
console.log(props);

function App() {
  return (
    <div>
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
