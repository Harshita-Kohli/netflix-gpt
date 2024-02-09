import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"moviesSlice",
    initialState:{
        nowPlayingMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(movie,state)=>{},
        removeMovie:()=>{}
    }
})