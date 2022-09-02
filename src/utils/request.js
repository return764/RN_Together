import axios from 'axios';
import Toast from 'react-native-toast-message';
import {Platform} from 'react-native';

// ? 'http://10.0.2.2:7090'

const request = axios.create({
  baseURL:
    Platform.OS === 'android'
      ? 'http://192.168.2.12:7090'
      : 'http://localhost:7090',
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

    if (response && response.status === 403) {
      Toast.show({
        type: 'error',
        text1: '权限异常',
      });
    }
    return Promise.reject(error);
  },
);

export default request;
