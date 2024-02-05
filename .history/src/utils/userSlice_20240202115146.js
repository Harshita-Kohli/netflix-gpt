import { createSlice } from "@reduxjs/toolkit";

//create a user slice:
const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: { addUser:(state,action)=>{},
removeUser:(state,action)}
});