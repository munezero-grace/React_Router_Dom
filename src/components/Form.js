import { useState } from "react";


let Form = ({name , setAge}) =>{
    const handleChange = (event) => {
        event.preventDefault();
        console.log(name);
        console.log(setAge); 
      }
    
let [names, setName] = useState("");
    return (
<div>
    <form onSubmit={
        (e) => { e.preventDefault();
            console.log("input value:", name);}
       
    }>
        <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="text"/>
        <button type="submit">SEND</button>
    </form>
</div>
    )
}
export default Form;