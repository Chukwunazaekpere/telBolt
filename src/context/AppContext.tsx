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
    const [state, dispatch] = useReducer(toggleDrawerReducer, initialState);
    
    return(
        <AppStore.Provider value={{state, dispatch}}>
            {children}
        </AppStore.Provider>
    )
}

export default AppStateContext;

 
