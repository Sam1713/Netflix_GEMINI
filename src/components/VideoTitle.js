import React from 'react'
const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video absolute pt-36  px-10 text-white bg-gradient-to-r from-black pt-[20%]'>
      <h1 className="text-centre text-3xl font-bold">{title}</h1>
      <p className='py-10 w-1/4'>{overview}</p>
      <div className="">
      <button className='bg-white text-black font-bold h-10 w-40 shadow-xl transition-transform transform-growth hover:scale-105 hover:bg-gray-300 rounded-md'>Play</button>
      <button className='h-10 mx-7 w-40 bg-gray-500 shadow-xl transition-transform transform-growth hover:bg-gray-500 hover:scale-105 bg-opacity-20 rounded-md'>More Info</button>

      </div>
    </div>
  )
}

export default VideoTitle
