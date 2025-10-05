import React, { useState } from 'react'
import { useAuth } from '../context/Authcontext'

const UpdateProfile = () => {
    const {currentuser,updateUserProfile} = useAuth();
    const [name,setname]=useState('')
    const [photoURL,setphotoURL]=useState("")
    const [sucess,setsucess]=useState("")
    console.log(currentuser)
    const handleUpdateProfile=async(e)=>{
        e.preventDefault()
        try {
            await updateUserProfile({
                displayName: name || currentuser.displayName,
                photoURL: photoURL || currentuser.photoURL
            })
            
        } catch (error) {
            console.log(error.message)
            
            
        }
    }
  return (
    <div className='p-8'>
        <h1 className='text-2xl font-bold'> update Your Profile</h1>
        <p>Curent Display Name : {currentuser?.displayName}</p>
        <p>Curent Photo : {currentuser?.photoURL?<img src={currentuser?.photoURL} />:<span>not set photo</span>} </p>

        {/* update profile form */}
        <form  onClick={handleUpdateProfile} className='shadow p-4 max-w-sm'>
            <div className='space-y-2'>
                <label className='block'>New Display Name</label>
                <input value={name} onChange={(e)=>setname(e.target.value)} type="text" name='name' id='name' placeholder='Set New Name'  className='border p-2'/>
            </div>
             <div className='space-y-2'>
                <label className='block'>New Image Url</label>
                <input value={photoURL} onChange={(e)=>setphotoURL(e.target.value)} type="text" name='photoURL' id='photoURL' placeholder='Set photoURL'  className='border p-2'/>
            </div>
            <button type='submit' className='px-4 py-2 bg-green-700 rounded-xl text-white mt-5'>update Profile</button>
            {sucess && <p>{sucess}</p>}
        </form>
    </div>
  )
}

export default UpdateProfile