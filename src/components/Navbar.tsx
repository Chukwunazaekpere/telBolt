import React, { useState, useContext, FC } from "react";
import "../styles/Navbar.css";
import { toggleDrawer } from "../context/actions/Actions";
import AppStoreContext from '../context/Store';

interface NavProps {

}

const Navbar: FC<NavProps> = (props) => {
    const { dispatch } = useContext(AppStoreContext);
    const [drawerStatus, setDrawerStatus] = useState(true)

    const toggleSideDrawer = () => {
        console.log("Clicked hamburger...");
        dispatch(toggleDrawer(drawerStatus));
        setDrawerStatus(!drawerStatus)
    };

    return(
        <nav className='nav__container'>
            <div onClick={() => toggleSideDrawer()} className='hamburger'>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <h3>Bolt Admin</h3>
        </nav>
    )
}


export default Navbar;