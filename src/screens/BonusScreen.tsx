import { FC, useContext } from "react";
import Button from '../components/Button';
import SideDrawer from "../components/SideDrawer";
import AppStoreContext from "../context/Store";
import '../styles/Bonus.css';


interface Props {
    
}


const BonusScreen: FC<Props> = (props) => {
    const { state } = useContext(AppStoreContext);
    const drawerStatus = state.showDrawer;
    
    const formFields = ['Select Client', 'Bonus Type', 'Bonus Amount']

    return(
        <div className='bonus__container'>
            <section className='drawer'>
                {drawerStatus && <SideDrawer />}
            </section> 
            <section className={drawerStatus ? 'drawer__on' : 'drawer__off'}>
                <h3>Send Bonus</h3>
                {
                    formFields.map(field => (
                        <span className='form-group bonus__fields'>
                            {
                                field !== 'Bonus Amount' ? 
                                    <select className='form-control' name="" id="">
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
            </section>
        </div>
    )
}


export default BonusScreen;

