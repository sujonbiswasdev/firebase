import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
const Login = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [error, seterror] = useState("")
  const navigate = useNavigate()
  const auth = getAuth(app);
  const handleLogin = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        alert("login  successfull")
        navigate("/")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("login failed")
        seterror("login failed please corrcect information")
      });

  }

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result)
        alert("google login successfull")
        navigate("/")

      }).catch((error) => {
        console.log(error.message)
      });
  }

  const handleFacebookLogin = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        navigate("/")
      })
      .catch((error) => {
        console.log(error.message)
      });

  }

  // github login

  const handlegithubLogin=()=>{
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
  .then((result) => {

    const user = result.user.displayName;
    console.log(user)
    navigate("/")

   
  }).catch((error) => {
    
    const errorMessage = error.message;
    console.log(errorMessage)
  });

  }
  return (
    <div className='flex items-center justify-center min-h-screen bg-red-100'>
      <div className='w-full max-w-md p-8 space-y-6 bg-white rounded-lg'>
        <h2 className='text-2xl font-bold text-center text-gray-800'>Please Login</h2>
        {/* login form */}
        <form className='space-y-4' onSubmit={handleLogin}>
          <div>
            <label className='block mb-2 text-sm font-medium text-gray-700' htmlFor="">Email:</label>
            <input onChange={(e) => setemail(e.target.value)} value={email} className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent' type="email" name='email' placeholder='enter your email' id='email' />
          </div>

          <div>
            <label className='block mb-2 text-sm font-medium text-gray-700' htmlFor="">Password:</label>
            <input onChange={(e) => setpassword(e.target.value)} value={password} className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent' type="password" name='password' placeholder='enter your password' id='password' />
          </div>
          <p className='text-red-500'>{error && error}</p>
          <button type='submit' className='w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700'>login</button>
        </form>
        {/*  social login*/}

        <div className='text-center space-y-4'>
          <p>Or login with</p>
          <div className='flex items-center justify-center space-x-3' >
            <button onClick={handleGoogleLogin} className='flex items-center px-4 py-2 space-x-2 text-white bg-red-500 rounded hover:bg-red-700 cursor-pointer' ><FaGoogle /><span>Google</span></button>
            <button onClick={handleFacebookLogin} className='flex items-center px-4 py-2 space-x-2 text-white bg-blue-500 rounded hover:bg-blue-700 cursor-pointer'><FaFacebook /> <span>facebook</span></button>
            <button onClick={handlegithubLogin} className='flex items-center px-4 py-2 space-x-2 text-white bg-gray-800 rounded hover:bg-gray-900 cursor-pointer'><FaGithub /><span>Github</span></button>
          </div>

        </div>

        <p className='text-sm text-center text-gray-600'>don't have an account?please <Link to={"/register"} className='text-blue-600 hover:underline'>sign up</Link></p>
      </div>

    </div>
  )
}

export default Login