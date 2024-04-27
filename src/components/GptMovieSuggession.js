import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import { Shimmer } from 'react-shimmer';

const GptMovieSuggession = () => {
    const { moviesList, tmdbResults } = useSelector((store) => store.gpt);


    // Check if tmdbResults[0] exists and if it is an array
    if (!tmdbResults) {
        return null;
    }

    
        return (
            <div className="md:mt-0 p-4 m-4 bg-black text-white bg-opacity-90">
                <div>
                    <h1>{moviesList[0]}</h1>
                    {moviesList.map((movie, index) => (
                        <MovieList key={movie} title={movie} movies={tmdbResults[index].results} />
                    ))}
                </div>
            </div>
        );
    
};

export default GptMovieSuggession;
