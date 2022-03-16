import React, { createContext, useEffect, useState } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import Loader from '../components/Loader';
import { auth } from "../firebase";


export const AuthContext = createContext();



function Auth({children}) {

    const value = {};

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, () => {
   
       setLoading(false);
    });
  }, []);
if(loading){

    return <Loader/>
}

  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}

export default Auth;