import { createSlice } from "@reduxjs/toolkit";


const appMenuSlice = createSlice({
    name: "appMenu",
    initialState: {selectedMenu:{}, isOpen:false},
    reducers: {
        updateSelectedMenu(state, action) {
            console.log(action);
            state.selectedMenu = action.payload;
            state.isOpen = false;
        },
        toggleIsOpen(state, action) {
            state.isOpen = action.payload;
        }
    }

})

export const appMenuAction = appMenuSlice.actions
export default appMenuSlice;