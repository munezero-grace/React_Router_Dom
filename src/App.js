import React from "react";
import "../src/css/tech.css";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";
import Content from "./components/Content";
import Menu from "./components/Menu";
function App() {
    return (
      <div className="App">
     <Sidebar/>
     <Card/>
     <Content/>
     <Menu/>
      </div>
    );
  }
  
  export default App;