import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardIcon from '../assets/icon/dashboard.svg';
import HomeScreen from '../pages/HomeScreen';
import TaskIcon from '../assets/icon/task.svg';
import TaskScreen from '../pages/TaskScreen';
import RockIcon from '../assets/icon/rock.svg';
import ShopScreen from '../pages/ShopScreen';
import ToosIcon from '../assets/icon/toos.svg';
import SettingScreen from '../pages/SettingScreen';

const Tab = createBottomTabNavigator();
const iconSize = 30;

const MyNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Group screenOptions={{presentation: 'transparentModal'}}>
        <Tab.Screen
          name="Home"
          options={{
            tabBarIcon: () => (
              <DashboardIcon height={iconSize} width={iconSize} />
            ),
          }}
          component={HomeScreen}
        />
        <Tab.Screen
          name="Task"
          options={{
            tabBarIcon: () => <TaskIcon height={iconSize} width={iconSize} />,
          }}
          component={TaskScreen}
        />
      </Tab.Group>

      <Tab.Screen
        name="Shop"
        options={{
          tabBarIcon: () => <RockIcon height={iconSize} width={iconSize} />,
        }}
        component={ShopScreen}
      />
      <Tab.Screen
        name="Setting"
        options={{
          tabBarIcon: () => <ToosIcon height={iconSize} width={iconSize} />,
        }}
        component={SettingScreen}
      />
    </Tab.Navigator>
  );
};

export default MyNavigator;
