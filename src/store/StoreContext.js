import React, {createContext, useReducer} from 'react';
import {load, save} from '../utils/store';

const StoreContext = createContext({});

const reducer = async (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      await save('@user', action.payload);
      return {...state, isSignIn: true, loginUser: action.payload};
    default:
      throw new Error();
  }
};

const currentUser = load('@user');

const initialState = {
  loginUser: currentUser,
  isSignIn: !!currentUser,
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
