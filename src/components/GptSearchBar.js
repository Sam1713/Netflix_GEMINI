import React, { useRef,useState } from 'react'

import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS } from '../utils/constant';
import lang from '../utils/languageCOnstants'
import { useDispatch, useSelector } from 'react-redux'
import { addGptMovieResults } from '../utils/gptSlice';

const GptSearchBar = () => {
  const [loading, setLoading] = useState(false);

  const dispatch=useDispatch()
  const searchText=useRef(null)
    const langSel=useSelector((store)=>store.config.lang)

    const handleGptSearchClick=async()=>{
    
    const gptQuery="Act as a Movie Recommendation System and suggest some movies for the query : " + searchText.current.value + ". Only give me names of 5 movies, comma seperated. like the example result given ahead. Example result: Beast, Leo, Aadujeevitham, Manjummal Boys, Jawan";

    // Access your API key (see "Set up your API key" above)
    const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_KEY);
    
    async function run() {
      // For text-only input, use the gemini-pro model
      const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    
      const prompt = gptQuery
    
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      const moviesList=text.split(",")
      

      const promiseArray=moviesList.map((movie)=>searchMovieTMDB(movie))
      const tmdbResults=await Promise.all(promiseArray)
      dispatch(addGptMovieResults({moviesList:moviesList,tmdbResults:tmdbResults}))
    }
    
    run();
    
   
  
    }
    const searchMovieTMDB = async (movie) => {
      try {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS.options);
        const json = await data.json();
        return json; // Return the fetched movie data
      } catch (error) {
        return null; // Return null in case of error
      }
    };
  return (
    <div className='w-full pt-[35%] md:pt-[4%] flex justify-center'>
      <form className='m-6 bg-black w-full md:w-1/2  grid grid-cols-12'onSubmit={(e)=>e.preventDefault()}>
        <input ref={searchText} className='p-4 m-4 col-span-8' type='text'placeholder={lang[langSel].gptSearchPlaceholder}/>
        <button onClick={handleGptSearchClick} className='col-span-4 m-4 rounded-xl py-2 px-6 bg-red-700 text-white'>
        {lang[langSel].search}
        </button>
      </form>

    </div>
  )
}

export default GptSearchBar
