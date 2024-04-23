import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { useEffect } from 'react';

const useNowPlayingMovies=()=>{
    const dispatch=useDispatch()
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
    getNowPlayingMovies()
  },[])
}
export default useNowPlayingMovies