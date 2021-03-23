import "../styles/SideDrawer.css";
import { NavLink } from "react-router-dom";
import * as faIcons from "react-icons/fa";

interface Props {
    
}


const SideDrawer = (props: Props) => {
    const menu = ['Dashboard', 'Client', 'History', 'Bonus', 
                        "Notification", "Settings", "Signout"]
                        
    const icons = [ <faIcons.FaListUl />, <faIcons.FaPortrait />, <faIcons.FaHistory />, <faIcons.FaMoneyBillAlt />,
        <faIcons.FaInfo />, <faIcons.FaRegSun />, <faIcons.FaSignOutAlt />]
    return(
        <div className="sidebar__container">
            {
                menu.map((item, idx) => (
                    <ul key={idx}>
                        <NavLink to={item.toLowerCase()} className='drawer__links'>
                            <span>{icons[idx]}</span>
                            <span>{item}</span>
                        </NavLink>
                        <hr/>
                    </ul>
                ))
            }
        </div>
    )
}


export default SideDrawer;