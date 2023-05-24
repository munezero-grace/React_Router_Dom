import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/style.css";
import GetInTouch from "./components/GetInTouch";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/GetInTouch" component={GetInTouch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
