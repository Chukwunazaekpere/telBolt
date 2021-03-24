

enum AppActionTypes {
    Toggle_Drawer = "TOGGLE_DRAWER",
}

interface DrawerActionSchema {
    type: string,
    payload: boolean
}

export default AppActionTypes;
export type DrawerActionInterface = DrawerActionSchema