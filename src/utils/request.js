import axios from 'axios';
import Toast from 'react-native-toast-message';

const request = axios.create({
  baseURL: 'http://10.0.2.2:7090',
  timeout: 1000,
});

request.interceptors.response.use(
  response => response,
  error => {
    const {response} = error;
    if (response && (response.status === 400 || response.status === 500)) {
      Toast.show({
        type: 'error',
        text1: response.data.message,
      });
    }
    return Promise.reject(error);
  },
);

export default request;
