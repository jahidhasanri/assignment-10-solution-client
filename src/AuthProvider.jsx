import React, { createContext, useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from './firbase_config';


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const name='rifat';
    const [user,setUser]=useState(null)
    const [loader,setLoader]=useState(true)

    const handelRegistWemail=(email,password)=>{
        setLoader(true)
      return  createUserWithEmailAndPassword(auth,email,password)
    }

    const handelLoginWemail = (email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const handleSingOut = ()=>{
        setLoader(true)
        return signOut(auth);
    }
    const googleProvider = new GoogleAuthProvider();

    const handelLoginWithGoogle = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider);
      };

   

    

    
    const userInfo = {
        name,user,setUser,handelRegistWemail,handelLoginWemail,handleSingOut,loader,setLoader,handelLoginWithGoogle
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setLoader(false)
          setUser(currentUser);
          console.log(" Current user:", currentUser); 
        });
        return () => {
            unsubscribe();
          };
        }, []);


    return (
        <AuthContext.Provider value={userInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;