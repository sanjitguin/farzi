import { configureStore } from "@reduxjs/toolkit";
import appSearchSlice from "./search-slice";

const store = configureStore({
    reducer : {
        appSearch: appSearchSlice.reducer
    }
});

export default store;