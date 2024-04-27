import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        moviesList:null,
        tmdbResults:null,
    },
    reducers:{
       toggleGptSearchView:(state,action)=>{
        state.showGptSearch=!state.showGptSearch;
        state.moviesList=null;
        state.tmdbResults=null;
       },
       addGptMovieResults:(state,action)=>{
        const {moviesList,tmdbResults}=action.payload
        state.moviesList=moviesList
        state.tmdbResults=tmdbResults 
       },
    clearMovies:(state,action)=>{
        return
    }    }
})

export const {toggleGptSearchView,addGptMovieResults,clearMovies}=gptSlice.actions

export default gptSlice.reducer