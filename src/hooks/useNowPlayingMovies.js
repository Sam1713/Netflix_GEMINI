import { API_OPTIONS } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { useEffect } from 'react';

const useNowPlayingMovies=()=>{
    const dispatch=useDispatch()

    const  nowPlayingMovies=useSelector((store)=>store.movies.nowPlayingMovies)
  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch(API_OPTIONS.url, API_OPTIONS.options);
      const data = await response.json();
      dispatch(addNowPlayingMovies(data.results))
    } catch (err) {
      console.error('error:', err);
    }
  };
  useEffect(()=>{
    if(!nowPlayingMovies)getNowPlayingMovies()
  },[])
}
export default useNowPlayingMovies