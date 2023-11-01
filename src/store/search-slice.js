 import { createSlice } from "@reduxjs/toolkit";

 const appSearchSlice =  createSlice({
        name: "appSearch",
        initialState: {openSearchModal: false },
        reducers: {
             showSearchModal(state, action) {
                state.openSearchModal = true
             },
             closeSearchModal(state, action) {
                state.openSearchModal = false
             }
        }
    
 })

 export const appSearchAction = appSearchSlice.actions

 export default appSearchSlice