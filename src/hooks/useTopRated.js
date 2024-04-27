
import { useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addTopRated } from '../utils/movieSlice';
import { useEffect } from 'react';

const useTopRated=()=>{
    const dispatch=useDispatch()
    const topRated=useSelector((store)=>store.movies.topRated)

  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1'
      , API_OPTIONS.options);
      const data = await response.json();
      
      dispatch(addTopRated(data.results))
    } catch (err) {
      console.error('error:', err);
    }
  };
  useEffect(()=>{
    if(!topRated)getNowPlayingMovies()
  },[])
}
export default useTopRated