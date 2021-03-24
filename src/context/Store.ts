import { createContext } from 'react';

const appState = {
    showDrawer: true,
}

interface ContextType {
    state: typeof appState,
    dispatch: Function,
}

const AppStore = createContext({} as ContextType);
export default AppStore;


export type AppStateType = typeof appState;