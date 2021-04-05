import React, { useContext } from "react";
import SideDrawer from "../components/SideDrawer";
import AppStoreContext from "../context/Store";

import '../styles/Settings.css'

interface Props {
    
}


const SettingsScreen = (props: Props) => {
    const { state } = useContext(AppStoreContext);
    const drawerStatus = state.showDrawer;
    
    return(
        <div className='settings__container'>
            {
                drawerStatus && <SideDrawer />
            }
        </div>
    )
}


export default SettingsScreen;