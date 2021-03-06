import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile
} from "firebase/auth";

// For Use FireBase registration login logout

initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true)
  const [authError, setAuthError] = useState('')
  const [admin, setAdmin]= useState(false)
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();


  const registerUser = (email, password,name, history) => {
      setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError('')
        const newUser = {email, displayName:name}
        setUser(newUser)
        // for save user to db
        saveUser(email, name, 'POST')
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });
        history.replace('/')
      })
      .catch((error) => {
       setAuthError(error.message) ;
      })
      .finally(()=>setIsLoading(false));
  };

  const loginUser = (email, password, location, history)=>{
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const destination = location?.state?.from || '/'
        history.replace(destination)
        setAuthError('')
    })
    .catch((error) => {
      setAuthError(error.message)
    })
    .finally(()=>setIsLoading(false));
  }

  const signInWithGoogle = (location, history)=>{
    setIsLoading(true)
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      const destination = location?.state?.from || '/'
        history.replace(destination)
        saveUser(user.email, user.displayName, 'PUT')
      setAuthError('')
    }).catch((error) => {
        setAuthError(error.message)
    }).finally(()=>setIsLoading(false))
  }



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false)
    });
    return () => unsubscribe;
  }, [auth]);


  useEffect(()=>{
    fetch(`https://hidden-basin-03669.herokuapp.com/users/${user.email}`)
    .then(res=>res.json())
    .then(data=>setAdmin(data.admin))
  },[user.email])

  const logOut = () => {
      setIsLoading(true)
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(()=>setIsLoading(false));
  };

  const saveUser = (email, displayName, method)=>{
      const user ={email, displayName}
      fetch(`https://hidden-basin-03669.herokuapp.com/users`, {
        method:method,
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(user)
      })
      .then()
  }

  return {
    user,
    admin,
    isLoading,
    authError,
    registerUser,
    signInWithGoogle,
    loginUser,
    logOut,
  };
};

export default useFirebase;
