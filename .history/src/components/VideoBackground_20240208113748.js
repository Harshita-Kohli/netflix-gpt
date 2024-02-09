import React from 'react';
import { YOUTUBE_TRAILER } from '../utils/constants';
import useTrailerVideo from '../hooks/useTrailerVideo';

const VideoBackground = ({ movie_id }) => {
    //simply call the custom hook to fetch the trailer videp:
    const trailerVideo = useTrailerVideo();

    
    return (
        <div>
            <iframe src={`${YOUTUBE_TRAILER}/${trailerVideo.key}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    )
}
export default VideoBackground;
