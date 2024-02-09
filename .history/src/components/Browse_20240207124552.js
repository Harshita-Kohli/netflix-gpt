import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/moviesSlice'

const Browse = () => {

    
    //calling the getMovies API only once every time this component is rendered:
    useEffect(() => {
        getNowPlayingMovies();
    }, []);
    return (
        <div><Header /></div>
    )
}

export default Browse