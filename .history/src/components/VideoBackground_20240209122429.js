import React from 'react';
import { YOUTUBE_TRAILER } from '../utils/constants';
import useTrailerVideo from '../hooks/useTrailerVideo';
import { useSelector } from 'react-redux'
const VideoBackground = ({ movie_id }) => {
    const trailerVideo = useSelector(store => store?.movies?.trailerVideo);

    //simply call the custom hook to fetch the trailer video from api and put it onto the store
    useTrailerVideo(movie_id);
    return (
        <div>
            <iframe className='w-screen aspect-video h-screen' src={`${YOUTUBE_TRAILER}/${trailerVideo?.key}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    )
}
export default VideoBackground;
