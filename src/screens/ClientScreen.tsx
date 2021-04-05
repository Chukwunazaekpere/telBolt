import { useContext } from "react";
import SideDrawer from "../components/SideDrawer";
import AppStoreContext from "../context/Store";
import '../styles/Client.css';

interface Props {
    
}


const ClientScreen = (props: Props) => {
    const { state } = useContext(AppStoreContext);
    const drawerStatus = state.showDrawer;
    
    return(
        <div className='client__container'>
            {
                drawerStatus && <SideDrawer />
            }
        </div>
    )
}


export default ClientScreen;