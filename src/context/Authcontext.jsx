import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
const AuthContext = createContext();
export const useAuth =()=> useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [currentuser, setcurrentuser] = useState(null)
    const [loding,setloading]=useState(true)
    const auth = getAuth(app);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setloading(false)
            if (user) {
                console.log("auth provider user : ", user)
                setcurrentuser(user)
            } else {
                console.log("user not found")
            }
        });
        return () => unsubscribe()
    }, [])
     const value = { currentuser,loding }
    return (
        <section className="section">
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </section>
    )
}