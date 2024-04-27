import React from 'react'
import { IMG_ICON } from '../utils/constant'
const MovieCard = ({posterPath}) => {
  if(!posterPath)return
  return (
    <div className='w-32 md:w-40 pr-6 hover:scale-105 rounded-md'>
      <img alt="Movie Card"src={IMG_ICON+posterPath}></img>
    </div>
  )
}

export default MovieCard
