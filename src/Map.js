import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Mapping from "./components/Mapping";
import './css/map.css';
import { useState } from "react";
function App() {

    let [Students,setStudents]=useState([{name:"pacifique" , age:12},{name:"kanyana", age:53}]);

  return (
    <div className="App">
      <Mapping Students={Students}/>
    </div>
  );
}

export default App;