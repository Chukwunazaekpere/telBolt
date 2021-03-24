import Navbar from './components/Navbar';
import { Route, Switch } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import AppStateContext from './context/AppContext';


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
