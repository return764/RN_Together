import axios from 'axios';
import {Platform} from 'react-native';

// ? 'http://10.0.2.2:7090'

const request = axios.create({
  baseURL:
    Platform.OS === 'android'
      ? 'http://192.168.2.12:7090'
      : 'http://localhost:7090',
  timeout: 10000,
});

export default request;
