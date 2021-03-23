import { createContext } from 'react';

// export type GlobalState = typeof globalState;
const appState = {
    showDrawer: true,
}

const AppStore = createContext(appState);
export default AppStore;


export type AppStateType = typeof appState;