import React, { useEffect } from 'react'
import { API_OPTIONS, YOUTUBE_TRAILER } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/moviesSlice';

const VideoBackground = ({ movie_id }) => {



    
    return (
        <div>
            <iframe src={`${YOUTUBE_TRAILER}/${trailerVideo.key}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    )
}
export default VideoBackground;
