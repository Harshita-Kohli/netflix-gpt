import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='p'>
            <h1>{title}</h1>
            <p>{overview}</p>
            <div>
                <button>Play</button>
                <button>More Info</button>
            </div>
        </div>
    )
}
export default VideoTitle;