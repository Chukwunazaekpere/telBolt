import {RouteProps, withRouter } from "react-router-dom";

//=====================================================================
import ProtectedRoutes from './routes/ProtectedRoutes';
import UnprotectedRoutes from './routes/UnprotectedRoutes';

interface Props {
  location?: RouteProps["location"]
  props?: RouteProps['children']
}

const App = (props: Props) => {
  const currentLocation = props.location?.pathname;  
  return (
      <>
        {
          <div>
            <ProtectedRoutes currentPath={currentLocation} />
            <UnprotectedRoutes />
          </div>
        }
      </>
  );
}

export default withRouter(App);
