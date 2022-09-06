import React, {createContext, useReducer} from 'react';

const reducer = (state, {type, payload}) => {
  switch (type) {
  }
};

const TaskContext = createContext({});
const initialState = {
  tasks: [],
};

export const TaskContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TaskContext.Provider value={{state, dispatch}}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
