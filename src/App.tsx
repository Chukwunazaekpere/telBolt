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

    </div>
  );
}

export default App;
