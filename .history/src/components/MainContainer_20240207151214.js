import React from 'react'
import { useSelector } from 'react-redux'
import moviesSlice from '../utils/moviesSlice'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    //We are making an Early return
    if(!movies) return;

    const mainMovie = movies[0];
    const {originalTitle, }
    console.log(mainMovie);
    return (
        <div>
            <VideoTitle title = {mainMovie.title}/>
            <VideoBackground />
        </div>
    )
}

export default MainContainer