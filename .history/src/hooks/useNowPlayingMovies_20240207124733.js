//We create our custom hook:

import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/moviesSlice'

const useNowPlayingMovies = () => {
    //fetch data from TMDB API and update the store:
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        //the above returns a promise which is in a readable stream format, 

        const json = await data.json();//so we convert it into json from readable stream
        console.log(json.results);
        //pushing the movies fetched from api into the store
        dispatch(addNowPlayingMovies(json.results));
    }
    //calling the getMovies API only once every time this component is rendered:
    useEffect(() => {
        getNowPlayingMovies();
    }, []);
}
export default useNowPlayingMovies;