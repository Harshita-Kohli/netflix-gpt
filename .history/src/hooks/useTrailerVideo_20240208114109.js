import {useEffect} from 'react'
import { API_OPTIONS, YOUTUBE_TRAILER } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/moviesSlice';
export const useTrailerVideo = (movie_id) => {

    
    //fetching the trailer video and updating the store with it:
    //we can either manage trailer state locally in this component, or manage the state in the redux store and make this component use that state
    //fetch the movie trailer based on the movie id
    const dispatch = useDispatch();
    // const trailerVideo = useSelector(store => store?.movies?.trailerVideo);

    const getMovieTrailer = async () => {
        const movie = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos`, API_OPTIONS);
        const movie_json = await movie.json();
        console.log(movie_json);
        const filterData = movie_json.results.filter(movie => movie.type === "Trailer");

        //if filter Data is non-empty, return the trailer otherwise if no trailer is found, display the first video out of the json
        //there can be multiple trailers, so take the filterData[0]
        const trailer = filterData ? filterData[0] : movie_json.result[0];
        console.log(trailer);
        //dispatch the action to add the trailer video to the redux store 
        dispatch(addTrailerVideo(trailer));
    }
    useEffect(() => {
        getMovieTrailer();
    }, []);
}

export default useTrailerVideo;
