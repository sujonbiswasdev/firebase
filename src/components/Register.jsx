import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import app from '../firebase/firebase.config';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
const Register = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [error, seterror] = useState('')
    const [message, setmessage] = useState("")
    const navigate = useNavigate()
    const auth = getAuth(app);

    const handleRegister = (e) => {
        console.log("sign up button clicked")
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                sendEmailVerification(user)
                    .then(() => {
                        setmessage("Resgistasion sucessfull! A varification email has been sent to your email address")
                        alert("please check your gmail")
                        console.log(user.email)
                    }).catch((error)=>{console.log("error page:",error)});

                setTimeout(() => {
                    console.log("user signed ", user)
                    alert("Register successfull")
                    navigate("/login")
                }, 5000)


            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                seterror(errorMessage)
                // ..
            });

    }
    return (
        <div className='flex items-center justify-center min-h-screen bg-red-100'>
            <div className='w-full max-w-md p-8 space-y-6 bg-white rounded-lg'>
                <h2 className='text-2xl font-bold text-center text-gray-800'>Please Register</h2>
                {/* login form  */}
                <form className='space-y-4' onSubmit={handleRegister}>
                    <div>
                        <label className='block mb-2 text-sm font-medium text-gray-700' htmlFor="">Email:</label>
                        <input onChange={(e) => setemail(e.target.value)} value={email} className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent' type="email" name='email' placeholder='enter your email' id='email' />
                    </div>

                    <div>
                        <label className='block mb-2 text-sm font-medium text-gray-700' htmlFor="">Password:</label>
                        <input onChange={(e) => setpassword(e.target.value)} value={password} className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent' type="password" name='password' placeholder='enter your password' id='password' />
                    </div>
                    <p className='text-red-500'>{error && error}</p>
                    <p className='text-green-700'>{message && message}</p>
                    <button type='submit' className='w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700'>sign up</button>
                </form>


                {/*  social login*/}

                <div className='text-center space-y-4'>
                    <p>Or login with</p>
                    <div className='flex items-center justify-center space-x-3' >
                        <button className='flex items-center px-4 py-2 space-x-2 text-white bg-red-500 rounded hover:bg-red-700 cursor-pointer'><FaGoogle /><span>Google</span></button>
                        <button className='flex items-center px-4 py-2 space-x-2 text-white bg-blue-500 rounded hover:bg-blue-700 cursor-pointer'><FaFacebook /> <span>facebook</span></button>
                        <button className='flex items-center px-4 py-2 space-x-2 text-white bg-gray-800 rounded hover:bg-gray-900 cursor-pointer'><FaGithub /><span>Github</span></button>
                    </div>

                </div>


                <p className='text-sm text-center text-gray-600'>Already have an account? please <Link to={"/login"} className='text-blue-600 hover:underline'>log in</Link></p>
            </div>

        </div>
    )
}

export default Register