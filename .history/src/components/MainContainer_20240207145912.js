import React from 'react'
import { useSelector } from 'react-redux'
import moviesSlice from '../utils/moviesSlice'

const MainContainer = () => {
    const movies = useSelector(store=> store.movies?.nowPlayingMovies);
  return (
    <div>
    <VideoTi
    </div>
  )
}

export default MainContainer