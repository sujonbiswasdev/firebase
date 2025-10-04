import React from 'react'
import { useAuth } from '../context/Authcontext'
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {currentuser,loding}=useAuth();
    if(currentuser){
        return children
    }
    if(loding){
        return (
            <div>loading animation</div>
        )
    }
    return <Navigate to="/login" replace/>
}

export default PrivateRoute