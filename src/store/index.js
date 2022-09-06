import React from 'react';
import {AuthContextProvider} from './AuthContext';

const StoreContextProvider = ({children}) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};

export default StoreContextProvider;
