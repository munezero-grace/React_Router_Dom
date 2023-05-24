import { Link } from "react-router-dom";
import React from "react";
function Header(){
    return(
        <header className="Header">
            <div className="one">BUSIP</div>
            <div className="two">
           <ul>
            <li>Home</li>
            <li>Event</li>
            <li>Programs</li>
            <li>Contact</li>
            <Link to='/GetInTouch'><button>join us</button></Link>
        </ul>
        
        </div>

  
        </header>
    );

}
export default Header;