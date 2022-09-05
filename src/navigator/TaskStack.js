import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TaskScreen from '../pages/TaskScreen';
import TaskCreateScreen from '../pages/TaskCreateScreen';
import {colors} from '../utils/setting';

const Stack = createNativeStackNavigator();

const taskScreens = [
  {
    name: 'TaskList',
    component: TaskScreen,
    options: {
      title: '任务',
    },
  },
  {
    name: 'TaskCreate',
    component: TaskCreateScreen,
    options: {
      title: '新增任务',
    },
  },
];

const screenOptions = {
  headerTintColor: colors.secondary,
  headerStyle: {
    backgroundColor: colors.primary,
  },
};

const TaskStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      {taskScreens.map(({name, component, options}) => (
        <Stack.Screen
          key={name}
          name={name}
          component={component}
          navigationKey={name}
          options={options}
        />
      ))}
    </Stack.Navigator>
  );
};

export default TaskStack;
