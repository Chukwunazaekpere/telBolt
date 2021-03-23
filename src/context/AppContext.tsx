import { useReducer, useContext, FC, ReactNode } from 'react';
import AppStore, { AppStateType } from './Store';
import {toggleDrawerReducer} from './reducer';

interface AppContextProps {
    children: ReactNode
}

const AppStateContext: FC<AppContextProps> = ({ children }) => {
    const initialState = {
        showDrawer: true,
    }
    const [showDrawer, dispatch] = useReducer(toggleDrawerReducer, initialState);
    
    return(
        // <AppStore.Provider value={{showDrawer, dispatch}}>
        //     {children}
        // </AppStore.Provider>
        <div>
            <h3>Hello</h3>
        </div>
    )
}

export default AppStateContext;

 
