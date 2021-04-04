//========================== Screens ===================================
import DashboardScreen from '../screens/DashboardScreen';
import HistoryScreen from '../screens/HistoryScreen';
import NotificationScreen from '../screens/NotificationScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ClientScreen from '../screens/ClientScreen';
import BonusScreen from '../screens/BonusScreen';
//=======================================================================
import Navbar from '../components/Navbar';
import AppContextProvider from '../context/AppContextProvider';


import { Switch, Route } from 'react-router-dom';
import { FC } from 'react';


interface Props {
    currentPath?: string
}

const ProtectedRoutes: FC<Props> = ({currentPath}) => {
    return(
        <AppContextProvider>
            <Navbar currentPath={currentPath} />
            <Switch>
                <Route path='/dashboard' component={DashboardScreen} />
                <Route path='/history' component={HistoryScreen} />
                <Route path='/notification' component={NotificationScreen} />
                <Route path='/client' component={ClientScreen} />
                <Route path='/settings' component={SettingsScreen} />
                <Route path='/bonus' component={BonusScreen} />
            </Switch>
        </AppContextProvider>
    )
}


export default ProtectedRoutes;