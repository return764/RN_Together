import React, {createContext, useReducer, useState} from 'react';

const StoreContext = createContext({});

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {...state, isSignIn: true, ...action.payload};
    default:
      throw new Error();
  }
};

const initialState = {
  loginUser: null,
  isSignIn: false,
};

export const StoreContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{state, dispatch}}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
