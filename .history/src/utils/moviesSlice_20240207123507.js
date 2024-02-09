import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"moviesSlice",
    initialState:{
        nowPlayingMovies:null,
    },
    reducers:{
        //we update the state with the payload
        addNowPlayingMovies:(state,action)=>{ state.nowPlayingMovies = action.payload},
    }
})
 //export actions and reducer
export const {addNowPlayingMovies} = moviesSlice.actions;
export default 