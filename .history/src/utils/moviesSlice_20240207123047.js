import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"moviesSlice",
    initialState:{
        nowPlayingMovies:null,
    },
    reducers:{
        addNowPlayingMovie:(movie,state)=>{},
        removeMovie:()=>{}
    }
})