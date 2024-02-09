import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='pt-36 px-12'>
            <h1 className='text-6xl font-bold'>{title}</h1>
            <p className='py-6 text-lg w-1/4'>{overview}</p>
            <div className=''>
                <button className='bg-gray-500 text-black p-4 w-20'>Play</button>
                <button>More Info</button>
            </div>
        </div>
    )
}
export default VideoTitle;