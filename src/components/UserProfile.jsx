import React from 'react'
import { useAuth } from '../context/Authcontext'
import Logout from './Logout'
import { Link } from 'react-router'

const UserProfile = () => {
    const { currentuser } = useAuth()
    console.log(currentuser)
    return (
        <div className=' h-screen flex items-center justify-center'>
            <div className='max-w-sm mx-auto shadow-md rounded-md py-12 px-8 space-y-4'>
                <h1 className='text-3xl font-bold'>User Profile card</h1>
               <div className='flex flex-col items-center justify-center'>
                 {
                        currentuser?.photoURL
                        && <img className='rounded-2xl' src={currentuser?.photoURL
                        } alt='profile' />
                }
               </div>
                <h2>Welcom , {currentuser?.displayName}</h2>
                <div>
                    <p className='text-sm'>Email : {currentuser?.email}</p>
                    <p className='text-sm'>validation : {currentuser?.emailVerified?"yes":"no"}</p>
                    <p className='text-sm'>user id : {currentuser?.uid}</p>

                </div>
                <div className='flex justify-between items-center'>
                    <Logout/>
                    <Link to={'/'} className='px-6 py-3 bg-green-700 text-white rounded'>Home</Link>
                </div>
             <div>
                   <Link to={"/update"} className='px-4 py-2 bg-green-700 text-white rounded'>Edit Profile</Link>
             </div>
            </div>
        </div>
    )
}

export default UserProfile