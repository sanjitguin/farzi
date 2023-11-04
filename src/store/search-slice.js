 import { createSlice } from "@reduxjs/toolkit";

 const appSearchSlice =  createSlice({
        name: "appSearch",
        initialState: {openSearchModal: false },
        reducers: {
             toggleSearchModal(state, action) {
                state.openSearchModal = action.payload
             }
        }
    
 })

 export const appSearchAction = appSearchSlice.actions

 export default appSearchSlice