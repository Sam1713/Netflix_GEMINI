import { createSlice } from "@reduxjs/toolkit";



const movieSlice=createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovie:null,
        topRated:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovie=action.payload
        },
        addTopRated:(state,action)=>{
            state.topRated=action.payload
        }
    }
})
 
export const{addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRated}=movieSlice.actions

export default movieSlice.reducer