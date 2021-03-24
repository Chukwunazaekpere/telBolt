import AppActionTypes, {DrawerActionInterface} from './actions/ActionTypes';
import { AppStateType } from './Store';


export const toggleDrawerReducer = (state: AppStateType, action: DrawerActionInterface): AppStateType => {
    switch (action.type) {
        case AppActionTypes.Toggle_Drawer:
            state.showDrawer = action.payload;
            return({
                ...state,
            })
        default:
            return({
                ...state
            });
    }
}


