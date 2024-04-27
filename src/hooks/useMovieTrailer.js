import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import movieSlice, { addTrailerVideo } from '../utils/movieSlice';
import { useDispatch, useSelector } from 'react-redux';
// Now you can use the 'options' object

const useMovieTrailer=(movieId)=>{
    const dispatch=useDispatch()

    const trailerVideo=useSelector((store)=>store.movies.trailerVideo)



    const getMovieVideo=async()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS.options);
        const res=await data.json()
   
       const trailerVideos=res.results.filter((vid)=>vid.type==='Trailer')
       const trailer=trailerVideos.length?trailerVideos[0]:res.results[0]
       dispatch(addTrailerVideo(trailer))
   
     }
   
     useEffect(()=>{
      if(!trailerVideo)getMovieVideo()
     },[])
}
export default useMovieTrailer