import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
const Logout = () => {
    const auth = getAuth(app);
    const handleLogout = (e) => {
        e.preventDefault()
        signOut(auth).then(() => {
            alert("user signed out successfull")
        }).catch((error) => {
            // An error happened.
            console.log(error.message)
        });
    }
    return (
        <div className='my-8'>
            <button onClick={handleLogout} className='cursor-pointer px-5 py-2 bg-red-600 text-white font-semibold rounded'>Log out</button>
        </div>
    )
}

export default Logout