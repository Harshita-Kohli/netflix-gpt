import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='pt-20 px-12'>
            <h1 className='text-6xl font-bold'>{title}</h1>
            <p className='p-6 text-lg w-1/2'>{overview}</p>
            <div>
                <button>Play</button>
                <button>More Info</button>
            </div>
        </div>
    )
}
export default VideoTitle;