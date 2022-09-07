import React, {createContext, useReducer} from 'react';
import {TaskType} from './config';

const reducer = (tasks, {type, payload}) => {
  switch (type) {
    case TaskType.REFRESH:
      return [...payload];
    case TaskType.ADD:
      return [...tasks, payload];
    default:
      throw new Error();
  }
};

const TaskContext = createContext({});
const initialTasks = [];

export const TaskContextProvider = ({children}) => {
  const [tasks, dispatch] = useReducer(reducer, initialTasks);

  return (
    <TaskContext.Provider value={{tasks, dispatch}}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
