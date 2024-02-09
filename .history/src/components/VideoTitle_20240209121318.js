import React from 'react'
import "info.png"
const VideoTitle = ({ title, overview }) => {
    return (
        <div className='px-24 absolute bg-gradient-to-r from-black text-white w-screen aspect-video pt-[20%]'>
            <h1 className='text-6xl font-bold'>{title}</h1>
            <p className='py-6 text-lg w-1/4'>{overview}</p>
            <div className=''>
                <button className='bg-gray-500 text-white py-4 px-10 text-lg rounded bg-opacity-50 mx-2' > ▶ Play</button>
                <button className='bg-gray-500 text-white py-4 px-10 text-lg rounded bg-opacity-50 mx-2' ><img src="info.png"></img>More Info</button>
            </div>
        </div>
    )
}
export default VideoTitle;