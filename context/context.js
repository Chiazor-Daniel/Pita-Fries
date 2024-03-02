// MyContext.js
import React, { createContext, useContext, useState } from 'react';

// Create the context
const MyContext = createContext();

// Initial state
const initialState = {
  isAuthenticated: false,
  user: null,
};

// Custom provider component
export const MyContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  // Function to login
  const login = (username) => {
    setState((prevState) => ({
      ...prevState,
      isAuthenticated: true,
      user: { username },
    }));
  };

  // Function to logout
  const logout = () => {
    setState((prevState) => ({
      ...prevState,
      isAuthenticated: false,
      user: null,
    }));
  };

  return (
    <MyContext.Provider value={{ state, login, logout }}>
      {children}
    </MyContext.Provider>
  );
};

// Custom hook to consume the context
export const useMyContext = () => useContext(MyContext);
