import React, {useContext, useMemo} from 'react';
import Toast from 'react-native-toast-message';
import request from '../../../utils/request';
import AuthContext from '../../../store/AuthContext';

const AxiosInterceptor = ({children}) => {
  const {dispatch} = useContext(AuthContext);

  useMemo(() => {
    request.interceptors.response.use(
      response => response,
      error => {
        const {response} = error;
        console.log('axios', response);
        if (response && (response.status === 400 || response.status === 500)) {
          Toast.show({
            type: 'error',
            text1: response.data.message,
          });
        }

        if (response && response.status === 401) {
          dispatch({type: 'SIGN_OUT'});
        }

        if (response && response.status === 403) {
          Toast.show({
            type: 'error',
            text1: '权限异常',
          });
        }
        return Promise.reject(error);
      },
    );
  }, [dispatch]);

  return children;
};

export default AxiosInterceptor;
