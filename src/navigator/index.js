import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthContext from '../store/AuthContext';
import HomeBaseTabStack from './HomeBaseTabStack';
import SignStack from './SignStack';
import SplashScreen from '../pages/SplashScreen';
import TaskCreateScreen from '../pages/TaskCreateScreen';
import {colors} from '../utils/setting';
import TaskDetailScreen from '../pages/TaskDetailScreen';

const TopStack = createNativeStackNavigator();

const MyNavigator = () => {
  const {
    state: {isSignIn, isLoading},
  } = useContext(AuthContext);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <TopStack.Navigator screenOptions={{headerShown: false}}>
      {isSignIn ? (
        <>
          <TopStack.Screen name="HomeStack" component={HomeBaseTabStack} />
          <TopStack.Screen
            name="TaskCreate"
            options={{
              headerShown: true,
              title: '新增任务',
              headerTintColor: colors.secondary,
              headerStyle: {
                backgroundColor: colors.primary,
              },
              headerBackTitleVisible: false,
            }}
            component={TaskCreateScreen}
          />
          <TopStack.Screen
            name="TaskDetail"
            options={{
              headerShown: true,
              title: '任务详情',
              headerTintColor: colors.secondary,
              headerStyle: {
                backgroundColor: colors.primary,
              },
              headerBackTitleVisible: false,
            }}
            component={TaskDetailScreen}
          />
        </>
      ) : (
        <TopStack.Screen name="SignStack" component={SignStack} />
      )}
    </TopStack.Navigator>
  );
};

export default MyNavigator;
