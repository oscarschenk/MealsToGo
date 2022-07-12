import React, { useState, createContext, useEffect } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

export const AuthenticationContext = createContext();

const useAuthentication = () => {};

export const AuthenticationContextProvider = ({ children }) => {
  return (
    <AuthenticationContext.Provider value={{}}>
      {children}
    </AuthenticationContext.Provider>
  );
};
