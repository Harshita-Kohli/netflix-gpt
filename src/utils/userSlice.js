import { createSlice } from "@reduxjs/toolkit";

//create a user slice:
const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        addUser: (state, action) => { return action.payload },
        removeUser: (state, action) => { return null },
    }
});
//RETURN actions and reducer object
export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;