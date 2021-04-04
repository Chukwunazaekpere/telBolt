import SideDrawer from "../components/SideDrawer";
import { useContext } from 'react';
import AppStoreContext from '../context/Store';

interface Props {
    
}


const DashboardScreen = (props: Props) => {
    const { state } = useContext(AppStoreContext);
    const drawerStatus = state.showDrawer;
    
    return(
        <div>
            {
                drawerStatus && <SideDrawer />
            }
        </div>
    )
}


export default DashboardScreen;