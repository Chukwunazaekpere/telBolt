import { FC } from "react";
import "../styles/SignupScreen.css";
import Button from '../components/Button';
import 'animate.css';

import * as Icons from "react-icons/fa";

interface Props {
    // showDrawer: boolean;
}


const HomeScreen: FC<Props> = (props) => {
    const details = ['Firstname', 'Lastname', 'Phone', 'Email']
    const route = props;
    console.log('route: ', route);

    const signup = () => {

    };

    const icons = [<Icons.FaUserCircle />, <Icons.FaUserCircle />, <Icons.FaPhoneAlt />, <Icons.FaInbox /> ]
    return(
        <div className='signup__container'>
            <section className='animate__animated animate__bounce signup__text'>
                <h3>Admin Signup</h3>
            </section>
            <section className='animate__animated animate__swing signup__form'>
                {
                    details.map((item, index) => (
                        <section key={item} className='signup__fields__container'>
                            <span className='signup__input__icon'>
                                {icons[index]}
                            </span>
                            <span className='signup__input__field'>
                                <input className='signup__input__fields' type={'Phone' ? "tel" : 'Password' ? 'password' : "email"} 
                                    placeholder={item} />
                            </span>
                        </section>
                    ))
                }
                <ul className='signup__btn__group'>
                    <li>
                        <Button backgroundColor='cadetblue' color='#171717' onCLick={() => signup()} title='Register' />
                    </li>
                    <li>
                        <Button backgroundColor='mediumslateblue' color='#171717' onCLick={() => signup()} title='Sign-in' />
                    </li>
                </ul>
            </section>
        </div>
    )
}


export default HomeScreen;