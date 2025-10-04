import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';

const Register = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate()
    const auth = getAuth(app);
    const handleRegister = (e) => {
        console.log("sign up button clicked")
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
               console.log("user signed ",user)
               alert("Register successfull")
               navigate("/login")

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                // ..
            });

    }
    return (
        <div className='flex items-center justify-center min-h-screen bg-red-100'>
            <div className='w-full max-w-md p-8 space-y-6 bg-white rounded-lg'>
                <h2 className='text-2xl font-bold text-center text-gray-800'>Please Register</h2>
                <form className='space-y-4' onSubmit={handleRegister}>
                    <div>
                        <label className='block mb-2 text-sm font-medium text-gray-700' htmlFor="">Email:</label>
                        <input onChange={(e) => setemail(e.target.value)} value={email} className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent' type="email" name='email' placeholder='enter your email' id='email' />
                    </div>

                    <div>
                        <label className='block mb-2 text-sm font-medium text-gray-700' htmlFor="">Password:</label>
                        <input onChange={(e) => setpassword(e.target.value)} value={password} className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent' type="password" name='password' placeholder='enter your password' id='password' />
                    </div>
                    <button type='submit' className='w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700'>sign up</button>
                </form>
                <p className='text-sm text-center text-gray-600'>Already have an account? please <Link to={"/login"} className='text-blue-600 hover:underline'>log in</Link></p>
            </div>

        </div>
    )
}

export default Register