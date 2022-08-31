import React, {createContext, useEffect, useReducer} from 'react';
import {load} from '../utils/store';

const StoreContext = createContext({});

const reducer = (state, {type, payload}) => {
  switch (type) {
    case 'LOGIN':
      return {
        ...state,
        isSignIn: true,
        isBinding: !!payload.binding,
        loginUser: payload,
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

export const StoreContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      const user = await load('@user');
      dispatch({type: 'REFRESH_USER', payload: user});
    })();
  }, []);

  return (
    <StoreContext.Provider value={{state, dispatch}}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContext;