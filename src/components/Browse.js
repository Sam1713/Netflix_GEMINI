import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovie from '../hooks/usePopularMovie'
import useTopRated from '../hooks/useTopRated'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'



const Browse = () => {

  const gptSelector=useSelector((store)=>store.gpt.showGptSearch)
  useNowPlayingMovies()
  usePopularMovie()
  useTopRated()
  return (
    <div>
      <Header/>
      {gptSelector?(
      <GptSearch/>
      ):(
        <>
      <MainContainer/>
      <SecondaryContainer/>
      </>
)}
      {/*
          mainComponent
          secondComponent
      */
      }
    </div>
  )
}

export default Browse
