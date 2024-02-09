import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'

const VideoBackground = ({ movie_id }) => {
    //fetch the movie trailer based on the movie id
    const getMovieTrailer = async () => {
        const movie = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos`, API_OPTIONS);
        const movie_json = await movie.json();
        // console.log(movie_json.map((movie) => {movie.type === "trailer"}));
        const movieTrailer = movie_json.filter(movie.type === "trailer");
        console.log(movieTrailer);
    }

    useEffect(() => {
        getMovieTrailer();
    }, []);
    return (
        <div>VideoBackground</div>
    )
}
export default VideoBackground;
