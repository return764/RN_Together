import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StoreContext from '../store/StoreContext';
import HomeBaseTabStack from './HomeBaseTabStack';
import SignStack from './SignStack';
import SplashScreen from '../pages/SplashScreen';
import TaskCreateScreen from '../pages/TaskCreateScreen';
import {colors} from '../utils/setting';

const TopStack = createNativeStackNavigator();

const MyNavigator = () => {
  const {
    state: {isSignIn, isLoading},
  } = useContext(StoreContext);

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
            }}
            component={TaskCreateScreen}
          />
        </>
      ) : (
        <TopStack.Screen name="SignStack" component={SignStack} />
      )}
    </TopStack.Navigator>
  );
};

export default MyNavigator;
