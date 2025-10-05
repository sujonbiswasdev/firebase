import React, { useState } from 'react'
import app from '../firebase/firebase.config'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'

const SendPasswordResetEmail = () => {
    const [email, setemail] = useState('')
    const [message, setmessage] = useState('')
    const [issucess, setissucess] = useState(false)
    const auth = getAuth(app)
    const handlePasswordReset = async (e) => {
        e.preventDefault()
        if (!email) {
            setmessage("please enter your email address")
            setissucess(false)
            return;
        }

        try {
            await sendPasswordResetEmail(auth, email)
                .then(() => {
                    setmessage("Password reset email sent! check your inbox.")
                    setissucess(true)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log("getting an error to submit form",errorMessage)
                    // ..
                });

        } catch (error) {
            console.log("error sending password reset emil",error.message)
            setmessage("Failded to send password reset emil .please check your email address and try again")

        }

    }
    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className='w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg'>
                <h2 className='text-2xl font-bold text-center text-gray-800'>Reset Your Password</h2>
                {
                    message && <p className={`p-2 text-center ${issucess ? "text-green-600 bg-green-100" : "text-red-600 bg-red-100"}`}>{message}</p>
                }
                <form onSubmit={handlePasswordReset} className='space-y-4'>
                    <div>
                        <label className='block mb-2 text-sm font-medium text-gray-700'>Email Address</label>
                        <input value={email} onChange={(e) => setemail(e.target.value)} type="email" name="email" id="email" placeholder='Enter your email' className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent' />
                    </div>
                    <button className='w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700'> Send Reset Email</button>

                </form>
            </div>
        </div>
    )
}

export default SendPasswordResetEmail