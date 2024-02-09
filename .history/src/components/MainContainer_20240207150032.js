import React from 'react'
import { useSelector } from 'react-redux'
import moviesSlice from '../utils/moviesSlice'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    const mainMovie = movies[0];
    
    return (
        <div>
            <VideoTitle />
            <VideoBackground />
        </div>
    )
}

export default MainContainer