import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const axiosPublic = useAxiosPublic();


  
  // Create User 
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // Sign In user 
  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Log Out
  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  }


  // GoogleLogin 
  const provider = new GoogleAuthProvider();
  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, provider)
  }

  // Update User Profile
  const updateUserProfile = (name, photo) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo
    })
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log("Current User", currentUser);
      if (currentUser) {
        const email = currentUser.email;
        const userInfo = { email };
        axiosPublic.post('/jwt', userInfo)
          .then(res => {
            if (res.data.token) {
              localStorage.setItem('access-token', res.data.token)
              setLoading(false)
            }
          })
      }
      else {
        setLoading(false)
        localStorage.removeItem('access-token')
      }
    })
    return () => {
      return unSubscribe
    }
  }, [])

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    googleLogin,
    logOut,
    updateUserProfile,

  }


  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;