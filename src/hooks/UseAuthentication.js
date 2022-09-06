import {useContext} from 'react';
import AuthContext from '../store/AuthContext';

export const useAuthentication = () => {
  const {
    state: {user},
  } = useContext(AuthContext);

  return user;
};
