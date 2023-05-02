import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext()
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)


    const createRegister = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogIn =()=>{
        return signInWithPopup(auth, googleProvider)
    }
    const githubLogIn =()=>{
        return signInWithPopup(auth, githubProvider)
    }
    const logOut =()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth,currentUser =>{
            setLoading(false)
              setUser(currentUser)
  
          })
  
          return ()=>{
              unsubscribe()
          }
  
      },[])

    const AuthInfo = {
        user,
        createRegister,
        signInUser,
        googleLogIn,
        githubLogIn,
        logOut,
        loading,

    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;