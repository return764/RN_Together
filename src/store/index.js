import React from 'react';
import {AuthContextProvider} from './AuthContext';
import {TaskContextProvider} from './TaskContext';

const StoreContextProvider = ({children}) => {
  return (
    <AuthContextProvider>
      <TaskContextProvider>{children}</TaskContextProvider>
    </AuthContextProvider>
  );
};

export default StoreContextProvider;
