import React, {createContext, useEffect, useReducer} from 'react';
import {load} from '../utils/store';

const AuthContext = createContext({});

const reducer = (state, {type, payload}) => {
  switch (type) {
    case 'LOGIN':
      return {
        ...state,
        user: payload,
        isSignIn: true,
        binding: payload.binding,
        isBinding: !!payload.binding,
      };
    case 'SIGN_OUT':
      return {
        ...initialState,
        isLoading: false,
      };
    case 'REFRESH_USER':
      const isSignIn = !!payload;
      if (!isSignIn) {
        return {
          ...initialState,
          isLoading: false,
        };
      }

      return {
        ...state,
        isSignIn,
        user: payload,
        isLoading: false,
        binding: payload.binding,
        isBinding: isSignIn && !!payload.binding,
      };
    default:
      throw new Error();
  }
};

const initialState = {
  user: null,
  binding: null,
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
