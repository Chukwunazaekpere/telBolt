import HomeScreen from '../screens/HomeScreen';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';

import { Switch, Route } from 'react-router-dom';

interface Props {
    
}


const UnprotectedRoutes = (props: Props) => {

    return(
        <div>
            <Route exact path='/' component={HomeScreen} />
            <Route path='/register' component={SignupScreen} />
            <Route path='/login' component={LoginScreen} />
        </div>
    )
}


export default UnprotectedRoutes;