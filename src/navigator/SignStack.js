import React from 'react';
import SignInScreen from '../pages/SignInScreen';
import SignUpScreen from '../pages/SignUpScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {colors} from '../utils/setting';

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
  headerTintColor: colors.secondary,
  headerStyle: {
    backgroundColor: colors.primary,
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
