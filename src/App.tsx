import Navbar from './components/Navbar';
import { Route, Switch } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import AppStateContext from './context/AppContext';

//========================== Screens =================================
import DashboardScreen from './screens/DashboardScreen';
import HistoryScreen from './screens/HistoryScreen';
import NotificationScreen from './screens/NotificationScreen';
import SettingsScreen from './screens/SettingsScreen';
import ClientScreen from './screens/ClientScreen';
import BonusScreen from './screens/BonusScreen';
import { FC, ReactNode } from 'react';
//=====================================================================


interface Props {
  props?: {
    history: object
  }
}

const App: FC<Props> = (props) => {
  const route = props.props;
  console.log(route);
  

  return (
    <div>
      {/* { */}

      <Navbar />
      <Switch>
        <Route exact path='/' component={HomeScreen} />
        <Route path='/dashboard' component={DashboardScreen} />
        <Route path='/history' component={HistoryScreen} />
        <Route path='/notification' component={NotificationScreen} />
        <Route path='/settings' component={SettingsScreen} />
        <Route path='/clients' component={ClientScreen} />
        <Route path='/bonus' component={BonusScreen} />
      </Switch>
      {/* } */}
    </div>
  );
}

export default App;
