import { ChangeEvent, FC, useState } from "react";
import "../styles/SignupScreen.css";
import Button from '../components/Button';
import 'animate.css';

import axios from 'axios';
import * as Icons from "react-icons/fa";

interface Props {
    // showDrawer: boolean;
}

interface UserData {
    Firstname: string;
    Lastname: string;
    Email: string;
    Phone: string;
    Password: string;
    [key: string]: ChangeEvent<HTMLInputElement> | string
}


const SignupScreen: FC<Props> = (props) => {
    const [formData, setFormData] = useState<UserData>({
        Firstname: "",
        Lastname: "",
        Email: "",
        Phone: "",
        Password: ""
    })
    const details = Object.keys(formData);
    const route = props;

    const handleFormData = (field: string, value: ChangeEvent<HTMLInputElement> | string) => {
        let newFormData = formData;
        newFormData[field] = value;
        setFormData({
            ...newFormData
        });
    };

    const handleSignup = async () => {
        const signupReport = await axios.post("", {
            data: {
                ...formData
            }
        });
        
    };
    const handleLogin = async () => {
        const signupReport = await axios.post("", {
            data: {
                ...formData
            }
        });
        
    };

    const icons = [<Icons.FaUserCircle />, <Icons.FaUserCircle />, <Icons.FaPhoneAlt />, <Icons.FaInbox />, <Icons.FaUserShield/>]
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
                                    placeholder={item} onChange={(value) => handleFormData(item, value)} />
                            </span>
                        </section>
                    ))
                }
                <ul className='signup__btn__group'>
                    <li>
                        <Button backgroundColor='cadetblue' color='#171717' onCLick={() => handleSignup()} title='Register' />
                    </li>
                    <li>
                        <Button backgroundColor='mediumslateblue' color='#171717' onCLick={() => handleLogin()} title='Sign-in' />
                    </li>
                </ul>
            </section>
        </div>
    )
}


export default SignupScreen;