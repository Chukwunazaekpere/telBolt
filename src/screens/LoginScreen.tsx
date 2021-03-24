import { FC } from "react";
import "../styles/LoginScreen.css";
import Button from '../components/Button';
import 'animate.css';

import * as Icons from "react-icons/fa";

interface Props {
    // showDrawer: boolean;
}


const LoginScreen: FC<Props> = (props) => {
    const details = [ 'Phone', 'Email']
    const route = props;
    console.log('route: ', route);

    const signup = () => {

    };

    const icons = [<Icons.FaPhoneAlt />, <Icons.FaInbox /> ]
    return(
        <div className='login__container'>
            <section className='animate__animated animate__bounce login__text'>
                <h3>Admin Login</h3>
            </section>
            <section className='animate__animated animate__swing login__form'>
                {
                    details.map((item, index) => (
                        <section key={item} className='login__fields__container'>
                            <span className='login__input__icon'>
                                {icons[index]}
                            </span>
                            <span className='login__input__field'>
                                <input className='login__input__fields' type={'Phone' ? "tel" : 'Password' ? 'password' : "email"} 
                                    placeholder={item} />
                            </span>
                        </section>
                    ))
                }
                <ul className='login__btn__group'>
                    <li>
                        <Button backgroundColor='cadetblue' color='#171717' onCLick={() => signup()} title='Log-in' />
                    </li>
                    <li>
                        <Button backgroundColor='mediumslateblue' color='#171717' onCLick={() => signup()} title='Register' />
                    </li>
                </ul>
            </section>
        </div>
    )
}


export default LoginScreen;