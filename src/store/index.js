import { configureStore } from "@reduxjs/toolkit";
import appSearchSlice from "./search-slice";
import appMenuSlice from "./menu-slice";

const store = configureStore({
    reducer : {
        appSearch: appSearchSlice.reducer,
        appMenu: appMenuSlice.reducer
    }
});

export default store;