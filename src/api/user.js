import request from '../utils/request';

const login = async user => {
  try {
    const result = await request.post('/users/login', user);
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

const register = async createUser => {
  try {
    const result = await request.post('/users', createUser);
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export {login, register};
