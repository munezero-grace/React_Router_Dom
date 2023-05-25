import {MdOutlineSearch , MdOutlineNotificationsNone} from 'react-icons/md'
function Menu(){
    return(
        <div className="menu">
<div className='icons'><MdOutlineSearch/></div>
<div className='icons'><MdOutlineNotificationsNone/></div>
<div className='line'></div>
        </div>
    )
}
export default Menu;