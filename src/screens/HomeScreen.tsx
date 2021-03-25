import { FC, ReactNode } from "react";
import "../styles/HomeScreen.css";
import Button from '../components/Button';
import 'animate.css';


interface Props {
    children?: ReactNode
}

interface ActionLoop {
    action: string,
    idx: number
}

const HomeScreen: FC<Props> = ({ children }) => {
    const actions = ['Balance', 'Deposit', 'Withdrawal', 'Transactions',
                        'Team', 'Support', "FAQ's", ]

    const signup = () => {

    };

    return(
        <div className='home__container'>
            <section className='animate__animated animate__flash signup__text'>
                <h3>Trading Bot</h3>
            </section>
            <section className='animate__animated animate__pulse home__content'>
                <span className='content__display'>
                    
                </span>
                <ul className='home__btn__group'>
                        {
                            actions.map((action, idx)  => (
                                <li key={idx}>
                                    <Button color='#171717' onCLick={() => signup()} title={action} />
                                </li>
                            ))   
                        }
                </ul>
            </section>
        </div>
    )
}


export default HomeScreen;