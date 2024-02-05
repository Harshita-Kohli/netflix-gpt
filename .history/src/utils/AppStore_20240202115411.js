import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "./userSlice";

const appStore = configureStore({
    //add your slices here

});
export default appStore;