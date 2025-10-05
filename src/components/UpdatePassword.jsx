import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import app from '../firebase/firebase.config'
import { getAuth, updatePassword } from 'firebase/auth'
import { useNavigate } from 'react-router'

const UpdatePassword = () => {
    const [message, setmessage] = useState("")
    const [newPassword, setnewPassword] = useState("")
    const [newconfirmPassword, setnewconfirmPassword] = useState("")
    const [showPassword, setshowpassword] = useState(false)
    const navigate = useNavigate()
    const auth = getAuth(app);
    const handlePasswordUpdate = async (e) => {
        e.preventDefault();
        if (newPassword !== newconfirmPassword) {
            setmessage("password do not match")
            return;
        }
        if (newPassword.length < 6) {
            setmessage("password must be 6 character")
        }
        const user = auth.currentUser;
        if (user) {
            try {
                await updatePassword(user, newPassword)
                setmessage("password update sucessfull")
                navigate("/")
            } catch (error) {
                setmessage("Failed to update password,please try agin later.")
            }
        } else {
            setmessage("not autentication")
            alert("please login")
            navigate("/register")
        }
    }

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className='w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg'>
                <h2 className='text-2xl font-bold text-center text-gray-800'>Update password</h2>
                {message && <p className={`p-2 text-center ${message.includes("successfully") ? "text-green-800" : "text-red-700"}`}>{message}</p>}

                <form action="" onSubmit={handlePasswordUpdate}>
                    <div className='relative'>
                        <label className='block mb-2 text-sm font-medium text-gray-700' htmlFor="">New password</label>
                        <input value={newPassword} onChange={(e) => setnewPassword(e.target.value)} type={showPassword ? "text" : "password"} name='password' id='password' placeholder='Enter new Password' className='rounded-md p-1 w-full border-none outline-none ring-2 ring-blue-600' />
                        <div className='absolute bottom-2 right-0 flex items-center pr-3 cursor-pointer' onClick={() => setshowpassword(!showPassword)}>
                            {
                                showPassword ? <FaEyeSlash /> : <FaEye className='text-gray-800' />
                            }
                        </div>
                    </div>

                    <div className='relative mt-3' >
                        <label className='block mb-2 text-sm font-medium text-gray-700' htmlFor="">confirm password</label>
                        <input value={newconfirmPassword} onChange={(e) => setnewconfirmPassword(e.target.value)} type={showPassword ? "text" : "password"} name='confirmpassword' id='confirmpassword' placeholder='Enter confirm password' className='rounded-md p-1 w-full border-none outline-none ring-2 ring-blue-600' />
                        <div className='absolute bottom-2 right-0 flex items-center pr-3 cursor-pointer' onClick={() => setshowpassword(!showPassword)}>
                            {
                                showPassword ? <FaEyeSlash /> : <FaEye className='text-gray-800' />
                            }
                        </div>
                    </div>
                    <button type='submit' className='w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 mt-4'>Update password</button>
                </form>

            </div>
        </div>
    )
}

export default UpdatePassword