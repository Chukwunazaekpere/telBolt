import { createContext } from 'react';

const appState = {
    showDrawer: true,
    currentRoute: "/"
}

interface ContextType {
    state: typeof appState,
    dispatch: Function,
}

const AppStoreContext = createContext({} as ContextType);
export default AppStoreContext;


export type AppStateType = typeof appState;