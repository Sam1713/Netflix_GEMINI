import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [isSignin, setIsSignin] = useState(true); // Initialize isSignin as true initially

  const toggleIn = () => {
    setIsSignin(!isSignin);
  };

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
          className={`bg-black p-12 w-3/12 left-0 right-0 absolute items-center my-24 mx-auto h-150 rounded-lg bg-opacity-80 transition-all duration-500 transform ${isSignin ? '' : 'animate-jump'}`}
        >
          <h1 className='my-6 text-white font-bold text-3xl '>{isSignin ? 'SignIn' : 'SignUp'}</h1>

          {!isSignin && (
            <input type="text" placeholder='UserName' className='bg-gray-600 w-full p-2 my-2 text-white' />
          )}
          <input type="text" placeholder='Email' className='bg-gray-600 w-full p-2 my-2' /><br />
          <input type="password" placeholder='Password' className='bg-gray-600 w-full p-2 my-2 text-white' /><br />
          <button
            onClick={toggleIn}
            className='rounded w-full p-2 my-8 bg-red-700 text-white opacity-100 transition-all duration-300'
          >
            {isSignin ? 'SignIn' : 'SignUp'}
          </button>
          <span className='text-white cursor-pointer'>{isSignin ? ' New to netflix?' : 'Already Registered?'}</span>
          <span onClick={toggleIn} className='mx-2 text-white cursor-pointer hover:underline transition-all duration-300'>
            {isSignin ? 'Sign up' : 'Sign in'}
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
