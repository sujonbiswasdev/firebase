import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import app from '../../firebase/firebase.config';
import { useNavigate } from 'react-router';
const FinishSignin = () => {
    const [email, setemail] = useState("")
    const [message, setmessage] = useState("")
    const auth = getAuth(app);

    const navigate = useNavigate()
    useEffect(() => {
        if (!isSignInWithEmailLink(auth, window.location.href)) {
            setmessage("invalid  or expired sign in link")
            return;
        }
    }, [auth])

    const handleComplesingin = async (e) => {
        e.preventDefault();
        const storageemail = window.localStorage.getItem('emailForSignIn')
        const Emailtouse = email || storageemail
        if (!Emailtouse) {
            setmessage("Plesase Provide the email address used to receive the sign-in link")
            return;

        }
        try {
            const result = await signInWithEmailLink(auth, email, window.location.href)
            setmessage("Signing sucessfull")
            window.localStorage.removeItem('emailForSignIn');
            navigate("/dashboard")
        } catch (error) {
            console.log("Error Completing sing-in", error.message)
            setmessage("Failed  to complete sign in")
        }

    }


    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className='w-full max-w-md p-8 bg-white shadow-md rounded-lg'>

                <h2 className='text-2xl font-bold text-center text-gray-800 my-4'>complete your sign in</h2>
                {
                    message && <p className='p-2 my-2 text-center text-blue-600'>{message}</p>
                }
                <form onSubmit={handleComplesingin} className='space-y-4'>
                    <div>
                        <label className='block mb-2 text-sm font-medium text-gray-700'>Email Address : </label>
                        <input value={email} onChange={(e) => setemail(e.target.value)} type="email" className='w-full px-4 py-2 rounded-md focus:outline-none' name="email" id="email" placeholder='Enter Your Email' required />
                    </div>
                    <button className='w-full py-2 bg-blue-600 rounded-md text-white hover:bg-blue-800'>complete Sign-In </button>
                </form>
            </div>
        </div>
    )
}

export default FinishSignin