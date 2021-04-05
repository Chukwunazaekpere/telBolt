import { useContext } from "react";
import SideDrawer from "../components/SideDrawer";
import AppStoreContext from "../context/Store";

interface Props {
    
}


const Signout = (props: Props) => {
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


export default Signout;