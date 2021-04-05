import { useReducer, FC, ReactNode } from 'react';
import AppStore, { AppStateType } from './Store';
import {toggleDrawerReducer} from './reducer';

interface AppContextProps {
    children: ReactNode
}

const AppContextProvider: FC<AppContextProps> = ({ children }) => {
    const initialState: AppStateType = {
        showDrawer: false,
        currentRoute: "/"
    }
    const [state, dispatch] = useReducer(toggleDrawerReducer, initialState);
    
    return(
        <AppStore.Provider value={{state, dispatch}}>
            {children}
        </AppStore.Provider>
    )
}

export default AppContextProvider;

 
