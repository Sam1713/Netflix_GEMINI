import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  if (!movies) return null;


  return (
    <div className= 'ml-[3%] md:mx-2 md:py-[-10%] '>
      <h1 className='py-[-4%] text-white text-lg md:text-3xl font-bold'>{title}</h1>
      <div className='py-2 flex overflow-x-scroll no-scrollbar'>
        <div className='flex'>
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
