import React, { useState, useRef } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
const Login = () => {
  const [isSignin, setIsSignin] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const toggleIn = () => {
    setIsSignin(!isSignin);
  };
  
  const name=useRef(null)
  const email = useRef(null);
  const password = useRef(null);


  const handleForm = () => {
    const emailValue = email.current?.value;
  const passwordValue = password.current?.value;
  const nameValue = name.current?.value;

  if (!emailValue || !passwordValue || (!isSignin && !nameValue)) {
    setErrorMessage('Please fill in all fields.');
    setTimeout(() => {
      setErrorMessage('');
    }, 2000); // Hide the error message after 2 seconds
    return;
  }

  const msg = checkValidData(nameValue, emailValue, passwordValue);
  if (msg) {
    setErrorMessage(msg);
    setTimeout(() => {
      setErrorMessage('');
    }, 2000); // Hide the error message after 2 seconds
    return;
  }
  if(msg!==null) return

  //Signin and Signup Logic
  if(!isSignin){

createUserWithEmailAndPassword(auth, emailValue, passwordValue)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+errorMessage)
    // ..
  });
  }else{
    signInWithEmailAndPassword(auth, emailValue, passwordValue)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode+errorMessage)
    });
  }
}


  return (
    <div>
      <h1><Header/></h1>
      <div className="bg-gradient-to-tr from-black absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <div>
        <form
          action=""
          onSubmit={(e) => e.preventDefault()}
          className={`bg-black p-12 w-3/12 left-0 right-0 absolute items-center my-24 mx-auto h-150 rounded-lg bg-opacity-80 transition-all duration-500 transform ${isSignin ? '' : 'animate-jump'}`}
        >
          <h1 className='my-6 text-white font-bold text-3xl '>{isSignin ? 'SignIn' : 'SignUp'}</h1>
          <p className='text-red-500 font-bold'>{errorMessage}</p>

          {!isSignin && (
            <input type="text" ref={name} placeholder='UserName' className='bg-gray-600 w-full p-2 my-2 text-white' />
          )}
          <input type="text" ref={email} placeholder='Email' className='bg-gray-600 w-full p-2 my-2' /><br />
          <input type="password" ref={password} placeholder='Password' className='bg-gray-600 w-full p-2 my-2 text-white' /><br />
          <button
            onClick={handleForm}
            className='rounded w-full p-2 my-8 bg-red-700 text-white opacity-100 transition-all duration-300'
          >
            {isSignin ? 'SignIn' : 'SignUp'}
          </button>
          <span onClick={toggleIn} className='text-white cursor-pointer'>{isSignin ? ' New to netflix?' : 'Already Registered?'}</span>
          <span onClick={toggleIn} className='mx-2 text-white cursor-pointer hover:underline transition-all duration-300'>
            {isSignin ? 'Sign up' : 'Sign in'}
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
