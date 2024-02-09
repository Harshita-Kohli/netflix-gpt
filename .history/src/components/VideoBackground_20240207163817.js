import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'

const VideoBackground = ({ movie_id }) => {
    //fetch the movie trailer based on the movie id
    const getMovieTrailer = async () => {
        const movie = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos`, API_OPTIONS);
        const movie_json = await movie.json();
        console.log(movie_json);
        const filterData = filterData.length !== 0 ? movie_json.results.filter(movie => movie.type === "Trailer");
        console.log(filterData[0]);

        //if filter Data is empty, ie no trailer is found, handle this case:
        if(filterData.length === 0)
    }

    useEffect(() => {
        getMovieTrailer();
    }, []);
    return (
        <div>VideoBackground</div>
    )
}
export default VideoBackground;
