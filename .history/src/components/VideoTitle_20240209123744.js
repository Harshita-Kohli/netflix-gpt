import React from 'react';
const VideoTitle = ({ title, overview }) => {
    return (
        <div className='px-24 absolute bg-gradient-to-r from-black text-white w-screen aspect-video pt-[10%]'>
            <h1 className='text-6xl font-bold'>{title}</h1>
            <p className='py-6 text-lg w-1/4'>{overview}</p>
            <div className=''>
                <button className='bg-white text-black py-4 px-10 text-lg rounded mx-2 hover:opacity-90' > ▶ Play</button>
                <button className='bg-gray-500 text-white py-4 px-10 text-lg rounded bg-opacity-50 mx-2' >More Info</button>
            </div>
        </div>
    )
}
export default VideoTitle;