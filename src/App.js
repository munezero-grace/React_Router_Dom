import React, { useState } from "react";
// import "../src/css/tech.css";
// import Sidebar from "./components/Sidebar";
// import Card from "./components/Card";
// import Content from "./components/Content";
// import Menu from "./components/Menu";
// import Mapping from "./components/Mapping";


import '../src/css/mapping.css';
import Form from "./components/Form";
function App() {

  let [age, setAge] = useState(10);

    return (
      <div className="App">
     {/* <Sidebar/>
     <Card/>
     <Content/>
     <Menu/> */}
     {/* <Mapping/> */}
     <Form age={age} setAge={setAge} />
      </div>
    );
  }
  
  export default App;