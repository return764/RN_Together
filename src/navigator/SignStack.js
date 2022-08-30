import React from 'react';
import SignInScreen from '../pages/SignInScreen';
import SignUpScreen from '../pages/SignUpScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const signScreens = [
  {
    name: 'SignIn',
    component: SignInScreen,
    options: {
      title: '登录',
    },
  },
  {
    name: 'SignUp',
    component: SignUpScreen,
    options: {
      title: '注册',
    },
  },
];

const screenOptions = {
  headerTintColor: '#4994CA',
  headerStyle: {
    backgroundColor: '#EFBACE',
  },
};

const SignStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName="SignIn">
      {signScreens.map(({name, component, options}) => (
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

export default SignStack;
