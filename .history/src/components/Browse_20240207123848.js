import React, {useEffect} from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'

const Browse = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        //the above returns a promise which is in a readable stream format, 
        
        const json = await data.json();//so we convert it into json from readable stream
        console.log(json.results);
        dispatch(add)
    }
    //calling the getMovies API only once every time this component is rendered:
    useEffect(()=>{
        getNowPlayingMovies();
    },[]);
    return (
        <div><Header /></div>
    )
}

export default Browse