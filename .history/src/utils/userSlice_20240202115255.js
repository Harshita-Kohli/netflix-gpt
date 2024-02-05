import { createSlice } from "@reduxjs/toolkit";

//create a user slice:
const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        addUser: (state, action) => {return action.payload },
        removeUser: (state, action)=>{return null},
    }
});
export default userSlice.reducer;
export const user