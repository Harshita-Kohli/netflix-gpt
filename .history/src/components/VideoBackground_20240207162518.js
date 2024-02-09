import React from 'react'

const VideoBackground = ({movie_id}) => {
    //fetch the movie trailer based on the movie id
    const getMovieTrailer = async() =>{
        const movie = await fetch("https://api.themoviedb.org/3/movie/{movie_id}/videos")
    }
  return (
    <div>VideoBackground</div>
  )
}
export default VideoBackground;
