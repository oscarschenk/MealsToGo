import React, { useState, createContext, useEffect, useMemo } from "react";

import { getAuth, onAuthStateChanged, User } from "firebase/auth";

const auth = getAuth();

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  // const [isLoading, setIsLoading] = useState(false);
  // // const [user, setUser] = useState(null);
  // const [error, setError] = useState(null);

  // const [userLogged, setUserLogged] = useState(false);
  // const [userProfile, setUserProfile] = useState(null);

  // useEffect(() => {
  //   Firebase.auth().onAuthStateChanged((user) => {
  //     setUserLogged(user ? true : false);
  //     setIsLoading(false);
  //     setUserProfile(user);
  //   });
  // }, []); //<--- this means that useEffet will only run once, and not on every update

  // const signOutUser = () => {
  //   Firebase.auth().signOut();
  // };

  // const handleLogin = (email, password) => {
  //   Firebase.auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .catch((e) => setError(e.toString()));
  //   return;
  // };

  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsubscribeFromAuthStatuChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
      } else {
        // User is signed out
        setUser(undefined);
      }
    });

    return unsubscribeFromAuthStatuChanged;
  }, []);

  return (
    <AuthenticationContext.Provider value={{}}>
      {children}
    </AuthenticationContext.Provider>
  );
};
