import React from 'react'
const VideoTitle = ({title,overview}) => {
  return (
    <div className=' mt-[-5%] md:mt-[-36%] aspect-video absolute  px-6 md:px-10 text-white bg-gradient-to-r from-black pt-[20%]'>
      <h1 className=" w-23 md:w-45 text-centre text-xl md:text-3xl font-bold opacity-40 md:opacity-90">{title}</h1>
      <p className='hidden md:inline-block py-10 w-1/4'>{overview}</p>
      <div className="">
      <button className='bg-white text-black font-bold h-8 w-20 md:w-40 shadow-xl transition-transform transform-growth hover:scale-105 hover:bg-gray-300 rounded-md mt-1' >Play</button>
      <button className='hidden md:inline-block h-10 mx-7 w-40 bg-gray-500 shadow-xl transition-transform transform-growth hover:bg-gray-500 hover:scale-105 bg-opacity-20 rounded-md'>More Info</button>

      </div>
    </div>
  )
}

export default VideoTitle
