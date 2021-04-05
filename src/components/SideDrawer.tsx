import "../styles/SideDrawer.css";
import { NavLink } from "react-router-dom";
import * as faIcons from "react-icons/fa";
import { useContext, useState } from "react";
import AppStoreContext from "../context/Store";
import { toggleDrawer } from "../context/actions/Actions";

interface Props {
    
}


const SideDrawer = (props: Props) => {
    const { dispatch } = useContext(AppStoreContext);
    const [drawerStatus, setDrawerStatus] = useState(false)

    const toggleSideDrawer = () => {
        dispatch(toggleDrawer(drawerStatus));
        setDrawerStatus(!drawerStatus)
    };
    
    const menu = ['Dashboard', 'Client', 'History', 'Bonus', 
                        "Notification", "Settings", "Signout"]
                        
    const icons = [ <faIcons.FaListUl />, <faIcons.FaPortrait />, <faIcons.FaHistory />, <faIcons.FaMoneyBillAlt />,
        <faIcons.FaInfo />, <faIcons.FaRegSun />, <faIcons.FaSignOutAlt />]
    return(
        <div className="sidebar__container">
            {
                menu.map((item, idx) => (
                    <ul key={idx}>
                        <NavLink onClick={() => toggleSideDrawer()} to={item.toLowerCase()} className='drawer__links'>
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