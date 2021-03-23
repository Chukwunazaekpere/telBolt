import { FC } from "react";
import Button from '../components/Button';
import '../styles/Bonus.css';

interface Props {
    
}


const BonusScreen: FC<Props> = (props) => {
    const formFields = ['Select Client', 'Bonus Type', 'Bonus Amount']

    return(
        <div>
            <h3>Send Bonus</h3>
            {
                formFields.map(field => (
                    <span>
                        {
                            field !== 'Bonus Amount' ? 
                                <select name="" id="">
                                    {
                                        field === 'Bonus Type' ?
                                        <ul>
                                            <option value="Invest Bonus">Beginner</option>
                                            <option value="Account Balance Bonus">Intermediate</option>
                                            <option value="Advanced">Advanced</option>
                                        </ul>
                                        :
                                        <ul>
                                            <option value="Beginner">Beginner</option>
                                            <option value="Intermediate">Intermediate</option>
                                            <option value="Advanced">Advanced</option>
                                        </ul>

                                    }
                                </select> : 
                                <input min='1000' type="number"/>
                        }
                    </span>
                ))
            }
            <section className='bonus_btns'>
                <span><Button onCLick={() => ''} title='Cancel' /></span>
                <span><Button onCLick={() => ''} title='Send Bonus' /></span>
            </section>
        </div>
    )
}


export default BonusScreen;