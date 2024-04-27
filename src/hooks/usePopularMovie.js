import { API_OPTIONS } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies,addPopularMovies } from '../utils/movieSlice';
import { useEffect } from 'react';

const usePopularMovie=()=>{
  const popularMovie=useSelector((store)=>store.movies.popularMovie)
    const dispatch=useDispatch()
  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?page=1'
      , API_OPTIONS.options);
      const data = await response.json();
      dispatch(addPopularMovies(data.results))
    } catch (err) {
    }
  };
  useEffect(()=>{
    if(!popularMovie)getNowPlayingMovies()
  },[])
}
export default usePopularMovie