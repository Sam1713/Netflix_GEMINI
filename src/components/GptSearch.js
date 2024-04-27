import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggession from './GptMovieSuggession'
import { BG_URL } from '../utils/constant'

const GptSearch = () => {
  return (
    <>
    <div className="fixed -z-10">
    <img
      className="object-cover h-screen md:h-full"
      src={BG_URL}
      alt=""
    />
  </div>
    <div className=''>
      
      <GptSearchBar/>
      <GptMovieSuggession/>
    </div>
    </>
  )
}

export default GptSearch
