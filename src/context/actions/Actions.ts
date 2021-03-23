import * as actionTypes from './ActionTypes';


export const toggleDrawer = (status: boolean) => {
    return({
        type: actionTypes.TOGGLE_DRAWER,
        payload: status
    })
}

interface ActionSchema {
    type: string,
    payload: boolean | object
}

export type AppActionSchema = ActionSchema;