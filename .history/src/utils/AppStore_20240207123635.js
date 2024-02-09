import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesRe
const appStore = configureStore({
    //add your slices here
    reducer:{
        user:userReducer,
        movies:moviesReducer,
    }
});
export default appStore;