import React, { useState, useContext, FC, ReactNode } from "react";
import "../styles/Navbar.css";
import { toggleDrawer } from "../context/actions/Actions";
import AppStoreContext from '../context/Store';
import { RouteProps } from 'react-router-dom';

interface Props {
    currentPath?: string
}

const Navbar: FC<Props> = ({currentPath}) => {
    console.log("Route in Nav: ", currentPath);
    
    const pathname = currentPath;
    const { dispatch } = useContext(AppStoreContext);
    const [drawerStatus, setDrawerStatus] = useState(true)

    const toggleSideDrawer = () => {
        console.log("Clicked hamburger...");
        dispatch(toggleDrawer(drawerStatus));
        setDrawerStatus(!drawerStatus)
    };

    return(
        <nav className='nav__container'>
            <div onClick={() => toggleSideDrawer()} className={currentPath === "/register" || currentPath === "/login" 
                                                                        ? 'no__hamburger': 'hamburger'}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <h3 className='nav__text'>AmcorTradingBot Admin</h3>
        </nav>
    )
}


export default Navbar;