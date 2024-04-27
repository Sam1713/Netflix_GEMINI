
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';


const VideoBackground = ({movieId}) => {
  //fetch trailer video
  const trailerVideo=useSelector((store)=>store.movies?.trailerVideo)

  useMovieTrailer(movieId)

  return (
    <div>
      <iframe
        className='w-screen aspect-video mt-[-1%] md:mt-[-38%]'
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        style={{ backgroundColor: 'transparent' }} // Adjust background color
      ></iframe>
    </div>
  )

}
export default VideoBackground
