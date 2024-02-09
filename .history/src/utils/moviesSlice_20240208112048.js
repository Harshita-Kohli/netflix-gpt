import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"moviesSlice",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
    },
    reducers:{
        //we update the state with the payload
        addNowPlayingMovies:(state,action)=>{ state.nowPlayingMovies = action.payload},
        addTrailerVideo:(state, action)=>{state.trailerVideo = action.payload},
    }
})
 //export actions and reducer
export const {addNowPlayingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;