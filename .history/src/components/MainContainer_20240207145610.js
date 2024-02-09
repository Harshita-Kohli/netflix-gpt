import React from 'react'
import { useSelector } from 'react-redux'
import moviesSlice from '../utils/moviesSlice'

const MainContainer = () => {
    const movies = useSelector(moviesSlice);
  return (
    <div>MainContainer</div>
  )
}

export default MainContainer