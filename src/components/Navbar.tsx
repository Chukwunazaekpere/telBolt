import React, { useState, useContext, FC } from "react";
import "../styles/Navbar.css";
import { toggleDrawer } from "../context/actions/Actions";

interface NavProps {

}

const Navbar: FC<NavProps> = (props) => {
    
    const toggleSideDrawer = () => {
        console.log("Clicked hamburger...");
        toggleDrawer(false);
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