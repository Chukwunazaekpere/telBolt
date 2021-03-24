import AppActionTypes from './ActionTypes';


export const toggleDrawer = (status: boolean) => {
    return({
        type: AppActionTypes.Toggle_Drawer,
        payload: status
    })
}

