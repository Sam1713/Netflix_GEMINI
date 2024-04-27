import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
const SecondaryContainer = () => {
  const movies=useSelector((store)=>store.movies)
  
  return (
    <div className='bg-black'>
      <div className='md:pl-7 mt-0 md:-mt-40 relative z-index-20'>
      <MovieList title={'Now Playing'} movies={movies.nowPlayingMovies}/>
      <MovieList title={'Trending'} movies={movies.nowPlayingMovies}/>

      <MovieList title={'Most Popular'} movies={movies.popularMovie}/>

      <MovieList title={'Top Rated'} movies={movies.topRated}/>

      <MovieList title={'Romantic'} movies={movies.nowPlayingMovies}/>
      </div>
    </div>
)
}

export default SecondaryContainer
