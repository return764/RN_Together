import request from '../utils/request';

const fetchTasks = async (sourceUserId = null, status = null) => {
  try {
    const result = await request.get('/tasks', {
      params: {sourceUserId, status},
    });
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

const createTask = async task => {
  try {
    const result = await request.post('/tasks', task);
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export {fetchTasks, createTask};
