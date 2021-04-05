import { useContext } from "react";
import SideDrawer from "../components/SideDrawer";
import AppStoreContext from "../context/Store";

import '../styles/History.css';

interface Props {
    
}


const HistoryScreen = (props: Props) => {
    const { state } = useContext(AppStoreContext);
    const drawerStatus = state.showDrawer;
    
    return(
        <div className='history__container'>
            {
                drawerStatus && <SideDrawer />
            }
        </div>
    )
}


export default HistoryScreen;