import React from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constants'

const Browse = () => {
    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        //the above returns a promise which is in a readable stream format, 
        
        const json = await data.json();//so we convert it into json from readable stream
        console.log(json);
    }
    useEffect(()=>{

    },[])
    return (
        <div><Header /></div>
    )
}

export default Browse