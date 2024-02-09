import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const appStore = configureStore({
    //add your slices here
    reducer:{
        user:userReducer,
        movies:movies
    }
});
export default appStore;