import { FC } from "react";
import "../styles/HomeScreen.css";
import Button from '../components/Button';
import 'animate.css';


interface Props {
    // showDrawer: boolean;
}


const HomeScreen: FC<Props> = (props) => {
    const details = ['Firstname', 'Lastname', 'Phone', 'Email']

    const signup = () => {

    };

    return(
        <div className='home__container'>
            <section className='signup__text'>
                <h3>Admin Signup</h3>
            </section>
            <section className='animate__animated animate__swing signup__form'>
                {
                    details.map(item => (
                        <span className='fields__container' key={item}>
                            <input className='input__fields' type={'Phone' ? "tel" : 'Password' ? 'password' : "email"} 
                                    placeholder={item}/>
                        </span>
                    ))
                }
                <ul className='homebtn_group'>
                    <li>
                        <Button color='#171717' onCLick={() => signup()} title='Register' />
                    </li>
                    <li>
                        <Button color='#171717' onCLick={() => signup()} title='Signin' />
                    </li>
                </ul>
            </section>
        </div>
    )
}


export default HomeScreen;