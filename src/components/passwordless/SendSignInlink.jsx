import { getAuth, sendSignInLinkToEmail } from 'firebase/auth';
import React, { useState } from 'react'
import app from '../../firebase/firebase.config';

const SendSignInlink = () => {
    const [email,setemail]=useState("")
    const [message,setmessae]=useState("")
    const auth = getAuth(app);

    const actionCodeSettings={
        url: 'http://localhost:5173/finish-signup',
        handleCodeInApp: true,
    }
const handleSendSignInLink=async(e)=>{
    e.preventDefault();
    try {
        await sendSignInLinkToEmail(auth, email, actionCodeSettings)
        window.localStorage.setItem('emailForSignIn', email);
        setmessae("Sign-in Link Sent successfully to your email adress .Please check your inbox")
    } catch (error) {
        console.log("error sendign email link",error.message)
        setmessae("Failed to send email link. Please try again")
    }

}
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
        <div className='w-full max-w-md p-8 bg-white shadow-md rounded-lg
        '>

            <h2 className='text-2xl font-bold text-center text-gray-800 my-4'>Sign In with Email LInk</h2>
            {
                message && <p className='p-2 my-2 text-center text-blue-600'>{message}</p>
            }
            <form onSubmit={handleSendSignInLink} className='space-y-4'>
                <div>
                    <label className='block mb-2 text-sm font-medium text-gray-700'>Email Address : </label>
                    <input value={email} onChange={(e)=>setemail(e.target.value)} type="email" className='w-full px-4 py-2 rounded-md focus:outline-none'  name="email" id="email" placeholder='Enter Your Email' required />
                </div>
                <button className='w-full py-2 bg-blue-600 rounded-md text-white hover:bg-blue-800'>Send Sign-In Link</button>
            </form>
        </div>
        
    </div>
  )
}

export default SendSignInlink