import { createContext, useEffect, useState } from "react";
import { auth } from '../fbConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {

  const [user, setUser] = useState(null);

  const createNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const newUser = userCredential.user;
        console.log(newUser);
        alert("Sign up successful - now please log in")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        alert (errorCode + errorMessage)
      });
  }

  const logIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const loggedUser = userCredential.user;
        setUser(loggedUser);
        alert('Log in successful!')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        alert (errorCode + errorMessage)
      });
  }

  const logOut = () => {
    signOut(auth).then(() => {
        setUser(null);
     
        alert('You have logged out')
      }).catch((error) => {
        console.log(error)
      });
  }

  const checkForCurrentUser = () => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
  }

  useEffect(() => {
    checkForCurrentUser();
  }, [])
  
  console.log("current user:", user);
  return (
    <AuthContext.Provider value={{ user, logIn, logOut, createNewUser }}>
      { props.children }
    </AuthContext.Provider>
  )
}