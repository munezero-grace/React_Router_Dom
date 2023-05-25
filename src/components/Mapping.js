import '../css/mapping.css'
let Mapping = () =>{
    let holdItems = ["grace", "alice", "kanyana"];
    let objects = [{name: "munezero", age: 21}, {name: "kanyana", age: 23},{name: "axcel", age: 25}, {name: "Martin", age: 30}];
    let sprid = [...objects,{name: "Richard", age: 27}];
    let holdNumbers = [1,2,3,4,5]; 
return(
    <div>
        {
            sprid.map(item => (
                <div className="maped">
                <div className='name'><span>name: {item.name}</span></div>
                <div className='age'> <span>age: {item.age}</span></div>
                </div>
            ))
        }
    </div>
    )

}

export default Mapping;