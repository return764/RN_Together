import React, {createContext, useEffect, useReducer} from 'react';
import {load} from '../utils/store';

const AuthContext = createContext({});

const reducer = (state, {type, payload}) => {
  switch (type) {
    case 'LOGIN':
      return {
        ...state,
        isSignIn: true,
        isBinding: !!payload.binding,
        loginUser: payload,
      };
    case 'SIGN_OUT':
      return {
        ...state,
        isSignIn: false,
        loginUser: null,
      };
    case 'REFRESH_USER':
      const isSignIn = !!payload;

      return {
        ...state,
        isSignIn,
        loginUser: payload,
        isBinding: isSignIn && !!payload.binding,
        isLoading: false,
      };
    case 'BINDING':
      return {
        ...state,
        isBinding: true,
      };
    default:
      throw new Error();
  }
};

const initialState = {
  loginUser: null,
  isSignIn: false,
  isBinding: false,
  isLoading: true,
};

export const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      const user = await load('@user');
      dispatch({type: 'REFRESH_USER', payload: user});
    })();
  }, []);

  return (
    <AuthContext.Provider value={{state, dispatch}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
