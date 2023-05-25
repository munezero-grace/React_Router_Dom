import Responsive from "./components/Responsive";
import {Route, Routes} from 'react-router-dom';
import React from "react";
import './css/check.css'
function Check() {
let name="grace";
  return (
    <div className="Check">
        {/* <Routes>
      <Route path='/check' element={<Responsive name={name} />}  />
      </Routes> */}
      <Responsive name={name} />
    </div>
  );
}

export default Check;
