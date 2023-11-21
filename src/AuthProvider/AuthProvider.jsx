import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import auth from '../config/firebase/firebase.config';
import useAxiosSecure from "../hooks/useAxiosSecure";
export const AuthContext=createContext()

const AuthProvider = ({children}) => {
    
    
    const axiosSecure=useAxiosSecure()
    const [user, setUser] = useState({})
    const [loading,setLoading]=useState(true)
    

    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    

    const signin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignin = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            const userEmail=currentUser?.email||user?.email 
            const loggedUser={email:userEmail}
            setUser(currentUser)
            if(currentUser){
                axiosSecure.post("/jwt",loggedUser)
                .then(result=>{
                    console.log(result.data);
                })
            }
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [axiosSecure,user])

    const authInfo = { user, createUser, signin, googleSignin, logout ,loading }

  
    return (
        <div>
            <AuthContext.Provider value={authInfo} >
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;