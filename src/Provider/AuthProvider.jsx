import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
// import app from './../firebase/firebase.config';

export const AuthContext = createContext();

// const auth = getAuth(app);
const auth=getAuth(app)

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
 
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(loading, user);

  const createUser=(email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  };

  const signIn =(email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const updateUser = (updatedData)=>{
   if(auth.currentUser){
     return updateProfile(auth.currentUser, updatedData
        // displayName: name,
        // photoURL: photoURL
     )
    // .then(()=>{
    //     setUser({...auth.currentUser})
    // })
   }
   return Promise.reject('No user logged in')
  }


  const signInWithGoogle = ()=>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }

  const logOut =()=>{
    return signOut(auth);
}

const resetPassword = (email)=>{
    if(!email)return Promise.reject('email is required')
        return sendPasswordResetEmail(auth, email)
}


  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
        setLoading(false);
    });
    return()=>{
        unsubscribe();
    }
  }, [])

  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    signInWithGoogle,
    signIn,
    loading,
    setLoading,
    updateUser,
    resetPassword 
  };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
