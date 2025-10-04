import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from '../firebase/firebase.config';
const AuthState = () => {
    const [user, setuser] = useState(null)
    const auth = getAuth(app);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.email;
                setuser(uid)
            } else {
               console.log("user not found")
            }
        });
        return ()=> unsubscribe
    }, [auth])
    return (
        <div>
            {user ? <p>welcome {user}</p> : <p>please login here</p>}
        </div>
    )
}

export default AuthState