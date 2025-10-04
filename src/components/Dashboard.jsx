import React from 'react'
import { useAuth } from '../context/Authcontext'

const Dashboard = () => {
    const {currentuser}=useAuth()
    console.log("current user",currentuser)
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard