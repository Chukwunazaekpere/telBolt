import * as actionTypes from './actions/ActionTypes';
import { AppActionSchema } from './actions/Actions';
import { AppStateType } from './Store';


export const toggleDrawerReducer = (state: AppStateType, action: AppActionSchema): AppStateType => {
    switch (action.type) {
        case actionTypes.TOGGLE_DRAWER:
            const appDrawerStatus = action.payload;
            state.showDrawer = !appDrawerStatus;
            return({
                ...state,
            })
        default:
            return({
                ...state
            });
    }
}


