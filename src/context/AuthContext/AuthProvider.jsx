import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { AuthContext } from "./AuthContext";
import auth from "../../firebase/firebase.init";
import { useEffect, useState } from "react";

const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const registerUser = (email, password) => {
    
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }; 
  const signInWithGoogle = ()=>{
    return signInWithPopup(auth, googleProvider);
  }
  const signOutUser =()=>{
    return signOut(auth)
  }
  // observer
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser)
    });
    return ()=> {
      unSubscribe()
    }
  }, [])
  const authInfo = {
    registerUser,
    signInUser,
    signInWithGoogle,
    signOutUser,
    user
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
