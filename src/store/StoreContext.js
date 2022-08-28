import React, {createContext, useState} from 'react';

const StoreContext = createContext({});

export const StoreContextProvider = ({children}) => {
  const [loginUser, setLoginUser] = useState(null);

  return (
    <StoreContext.Provider value={{loginUser, setLoginUser}}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
