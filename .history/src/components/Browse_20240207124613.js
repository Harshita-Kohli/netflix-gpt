import React, { useEffect } from 'react'
import Header from './Header'


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