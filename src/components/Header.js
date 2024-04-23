import React,{useEffect} from 'react'
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'


const Header = () => {

const navigate=useNavigate()

const user=useSelector(store=>store.user)

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
  return (
    
    <div className='flex items-center justify-between w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img className='w-44' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
     {user &&
     (<div className='flex m-2'>
      <img className='w-10 h-12 rounded-xl' src={user.photoURL}alt='userIcon'></img>
  
       <button onClick={()=>handleSignOut()}>🔽</button>
      </div>
         )}
    </div>
  )
}

export default Header
