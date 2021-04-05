import React, { useState, useContext, FC, ReactNode } from "react";
import "../styles/Navbar.css";
import { toggleDrawer } from "../context/actions/Actions";
import AppStoreContext from '../context/Store';

interface Props {
    currentPath?: string
}

const Navbar: FC<Props> = ({currentPath}) => {    
    const { dispatch } = useContext(AppStoreContext);
    const [drawerStatus, setDrawerStatus] = useState(true)

    const toggleSideDrawer = () => {
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
            <span className='nav__text'>
                <h3>AmcorTradingBot</h3>
                <h4>{`${currentPath![1].toUpperCase()}` + currentPath!.substring(2)} - Admin</h4>
            </span>
        </nav>
    )
}


export default Navbar;