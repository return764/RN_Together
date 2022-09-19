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

const fetchTask = async id => {
  try {
    return (await request.get(`/tasks/${id}`)).data;
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

const updateTaskStatus = async (id, status) => {
  try {
    const result = await request.put(`/tasks/${id}`, {
      status,
    });
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

const TaskStatus = {
  UNCOMPLETED: 0,
  TO_EXAMINE: 1,
  COMPLETED: 2,
};

export {fetchTasks, fetchTask, createTask, updateTaskStatus, TaskStatus};
