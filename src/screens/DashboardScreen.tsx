import SideDrawer from "../components/SideDrawer";
import { useContext } from 'react';
import AppStoreContext from '../context/Store';

import '../styles/Dashboard.css';
import Button from '../components/Button';

interface Props {
    
}


const DashboardScreen = (props: Props) => {
    const { state } = useContext(AppStoreContext);
    const drawerStatus = state.showDrawer;
    
    const items = ['Active Users', 'Total Users', 'Total Investment', 'Total Deposits']
    const color = ['coral', 'rebeccapurple', 'magenta', 'darkkhaki']
    return(
        <div className='dashboard__container'>
            <div className='dasboard__content'>
                {
                    drawerStatus && <SideDrawer />
                }
                <section className={drawerStatus ? 'sidebar__content__details' : 'no__sidebar'}>
                    {
                        items.map((item, index) => (
                            <ul className={drawerStatus ? 'ul__sidebar__on' : 'ul__sidebar__off'} key={item}>
                                <li style={{
                                    backgroundColor: color[index]
                                }} className={'dashboard__item__list'  }>
                                    <span>{item}</span>
                                    <span className='item__count'>{0}</span>
                                    <hr className='horizontal__line'/>
                                    <Button color='#171717' backgroundColor={color[index]} title='Details' onCLick={() => ""} />
                                </li>
                            </ul>
                        ))
                    }
                </section>
            </div>
        </div>
    )
}


export default DashboardScreen;