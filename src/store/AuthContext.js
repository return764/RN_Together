import React, {createContext, useEffect, useReducer} from 'react';
import {load} from '../utils/store';
import {AuthType} from './config';

const AuthContext = createContext({});

const reducer = (state, {type, payload: user}) => {
  switch (type) {
    case AuthType.LOGIN:
      return {
        ...state,
        user,
        isSignIn: true,
        binding: user.binding,
        isBinding: !!user.binding,
      };
    case AuthType.LOGOUT:
      return {
        ...initialState,
        isLoading: false,
      };
    case AuthType.REFRESH_USER:
      const isSignIn = !!user;
      if (!isSignIn) {
        return {
          ...initialState,
          isLoading: false,
        };
      }

      return {
        ...state,
        isSignIn,
        user,
        isLoading: false,
        binding: user.binding,
        isBinding: isSignIn && !!user.binding,
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
      dispatch({type: AuthType.REFRESH_USER, payload: user});
    })();
  }, []);

  return (
    <AuthContext.Provider value={{state, dispatch}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
