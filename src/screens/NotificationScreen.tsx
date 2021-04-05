import { useContext } from "react";
import SideDrawer from "../components/SideDrawer";
import AppStoreContext from "../context/Store";
import '../styles/Notification.css'

interface Props {
    
}


const NotificationScreen = (props: Props) => {

    const { state } = useContext(AppStoreContext);
    const drawerStatus = state.showDrawer;
    
    return(
        <div className='notification__container'>
            {
                drawerStatus && <SideDrawer />
            }
        </div>
    )
}


export default NotificationScreen;