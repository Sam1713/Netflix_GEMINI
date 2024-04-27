import React,{useEffect} from 'react'
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { clearMovies, toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constant';
import { changeLanguage } from '../utils/configSlice';
const Header = () => {

const navigate=useNavigate()

const user=useSelector(store=>store.user)
const showGpt=useSelector((store)=>store.gpt.showGptSearch)

const dispatch=useDispatch()
useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
   //User signup and signin
    const {uid,email,displayName,photoURL} = user;
    dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
    navigate('/browse')
      // ...
    } else {
      // User is signed out
      // ...
      dispatch(removeUser())
      navigate('/')

    }
  });
},[])
const handleSignOut=()=>{
signOut(auth).then(() => {
  // Sign-out successful.
 }).catch((error) => {
  // An error happened.
  navigate('/error')
});


  }
  
const togglegpt=()=>{
  dispatch(toggleGptSearchView(null,null))
  dispatch(clearMovies()); }
const langChange=(e)=>{
  dispatch(changeLanguage(e.target.value))
}

  return (
<div className='md:flex flex-col md:flex-row md:items-center absolute justify-between w-full mx-auto px-8 py-2 z-10 bg-black md:bg-transparent'>
  <img className='w-28 md:w-44 mx-auto md:mx-0' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
  {user && (
    <div className='mx-[-2%] md:mx-0 flex justify-between items-center md:justify-between w-full md:w-auto m-2'>
      {showGpt && (
        <select className='bg-green-500 rounded-xl h-10' onChange={langChange}>
          {SUPPORTED_LANGUAGES.map((lan) => (
            <option key={lan.identifier}>{lan.name}</option>
          ))}
        </select>
      )}
    
<button onClick={() => togglegpt()} className=" w-24 text-white font-semibold  md:text-sm h-12 px-2 mx-4 bg-purple-800 rounded-full shadow-md hover:bg-red-600 ">{showGpt ? 'Home Page' : 'Gemini Search'}</button>


  <button onClick={handleSignOut} className='w-25 md:w-15 h-12 float-right md:float-none bg-red-500 text-white font-semibold py-2 px-2 md:px-10 md:text-left rounded-full shadow-md transform hover:shadow-lg hover:bg-purple-600 transition duration-300 ease-in-out md:mr-10'>
  SignOut
</button>

      
<img className='hidden md:inline-block  w-10 h-12 rounded-xl' src={user.photoURL} alt='userIcon'></img>

    </div>
  )}
</div>
  )
}

export default Header
