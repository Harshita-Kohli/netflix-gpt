import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'

const Browse = () => {
    //calling the custom hook to fetch the now playing movies:
    useNowPlayingMovies();
    
    return (
        <div><Header /></div>
    )
}

export default Browse