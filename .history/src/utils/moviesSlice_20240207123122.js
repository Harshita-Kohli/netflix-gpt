import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"moviesSlice",
    initialState:{
        nowPlayingMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{ state.nowPlayingMovies = return action.payload},
        removeMovie:()=>{}
    }
})