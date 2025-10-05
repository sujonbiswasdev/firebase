import { getAuth, onAuthStateChanged, updateProfile } from 'firebase/auth';
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
                setcurrentuser(user)
            } else {
                setcurrentuser(null)
            }
        });
        return () => unsubscribe()
    }, [auth])
    // update profile funtionality
    const updateUserProfile = async(newprofile)=>{
        if(currentuser){
            try {
                await updateProfile(currentuser,newprofile)
                setcurrentuser((preuser)=>({
                    ...preuser,
                    ...newprofile
                }))
            } catch (error) {
                console.log("error updating profile")
            }
        }else{
            console.log("user eror")
        }
    }
     const value = { currentuser,loding,updateUserProfile}
    return (
        <section className="section">
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </section>
    )
}