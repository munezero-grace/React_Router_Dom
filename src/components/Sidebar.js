import {GiVikingHead} from 'react-icons/gi';
import {MdOutlineDashboard , MdOutlineWallet , MdOutlineChatBubbleOutline , MdOutlineHelpCenter,MdSettings} from 'react-icons/md';
import {AiOutlineShoppingCart , AiOutlineFundProjectionScreen} from 'react-icons/ai';
import {IoMdMoon} from 'react-icons/io'
import {RiSunLine} from 'react-icons/ri'
function Sidebar(){
    return(
        <nav>
            <div className='container'>
            <div className='head'>
            <div className='title'>
                <GiVikingHead className='icon'/>
                <div className='TechTitans'>
                    <span className='one'>Tech</span><span className='two'>-Titans</span>
                    </div>
                    </div>
                    </div>
<div className='container1'>
<div className='navigation1'><MdOutlineDashboard className='icons'/><span className='context'>Dashboard</span></div>
<div className='navigation1'><AiOutlineShoppingCart className='icons'/><span className='context'>Orders</span></div>
<div className='navigation1'><AiOutlineFundProjectionScreen className='icons'/><span className='context'>Products</span></div>
<div className='navigation1'><MdOutlineWallet className='icons'/><span className='context'>Wallet</span></div>
<div className='navigation1'><MdOutlineChatBubbleOutline className='icons'/><span className='context'>Chats</span></div>
</div>
<div className='line'></div>
<div className='container2'>
<div className='navigation2'><MdSettings className='icons'/><span className='context2'>Settings</span></div>
<div className='navigation2'><MdOutlineHelpCenter className='icons'/><span className='context2'>Help Center</span></div>
    </div> 

    <div className='BW'>
        <div className='left'><IoMdMoon/><span className='name'>Dark</span></div>
        <div className='right'><RiSunLine/><span className='nameL'>Light</span></div>
        
        </div>  
    </div>
        </nav>
    )
}
export default Sidebar;