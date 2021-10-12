import { useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from "../Firebase/Firebase.inti";


initializeAuthentication()
const useFirebase=()=>{
    const [user, setUser] = useState({})

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signinUsingGoogle=()=>{
        // console.log('ananna')
       return signInWithPopup(auth, googleProvider);
    }
const logOut = ()=>{
    signOut(auth)
    .then(() => {
       setUser({})
      })
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } 
          });
    },[])
    return{
        user,
        signinUsingGoogle,
        logOut
    }
}
export default useFirebase;