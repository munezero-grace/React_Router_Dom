import { useState } from "react";

let Mapping = ({Students}) =>{
   
const Student = () =>{
    console.log(Students);
}
    return(
<div className="container">
    {/* <h1>{Students[1].name}</h1>
    <button onClick={Student}>Send</button> */}
  { Students.map((item) => (
    <div className="mappu">
        <div className="name"><span > name: {item.name}</span></div>
        <div className="age"><span > age: {item.age}</span></div>
       </div>
) )}
</div>
    )
}
export default Mapping;