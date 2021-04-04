import Navbar from './components/Navbar';
import { Route, Switch } from "react-router-dom";
import AppStoreContext from './context/Store';


import { FC, ReactNode, useContext } from 'react';
//=====================================================================
import ProtectedRoutes from './routes/ProtectedRoutes';
import UnprotectedRoutes from './routes/UnprotectedRoutes';

interface Props {

}

const App: FC<Props> = (props) => {
  const { state } = useContext(AppStoreContext);
  const currentRoute = state.currentRoute;

  return (
      <div>
        {
          // currentRoute === "/" ? <UnprotectedRoutes />
          // : <ProtectedRoutes />
          <div>
            <ProtectedRoutes />
            <UnprotectedRoutes />
          </div>

        }
      </div>
  );
}

export default App;
