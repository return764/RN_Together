import React from 'react';
import HomeScreen from '../pages/HomeScreen';
import {Text} from 'react-native';
import DashboardIcon from '../assets/icon/dashboard.svg';
import TaskScreen from '../pages/TaskScreen';
import TaskIcon from '../assets/icon/task.svg';
import ShopScreen from '../pages/ShopScreen';
import RockIcon from '../assets/icon/rock.svg';
import SettingScreen from '../pages/SettingScreen';
import ToosIcon from '../assets/icon/toos.svg';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const iconSize = 25;

const tabScreens = [
  {
    name: 'Home',
    component: HomeScreen,
    options: {
      title: '主页',
      tabBarLabel: () => <Text>主页</Text>,
      tabBarIcon: () => <DashboardIcon height={iconSize} width={iconSize} />,
    },
  },
  {
    name: 'Task',
    component: TaskScreen,
    options: {
      title: '任务',
      tabBarLabel: () => <Text>任务</Text>,
      tabBarIcon: () => <TaskIcon height={iconSize} width={iconSize} />,
    },
  },
  {
    name: 'Shop',
    component: ShopScreen,
    options: {
      title: '商店',
      tabBarLabel: () => <Text>商店</Text>,
      tabBarIcon: () => <RockIcon height={iconSize} width={iconSize} />,
    },
  },
  {
    name: 'Setting',
    component: SettingScreen,
    options: {
      title: '设置',
      tabBarLabel: () => <Text>设置</Text>,
      tabBarIcon: () => <ToosIcon height={iconSize} width={iconSize} />,
    },
  },
];

const tabBaseOptions = {};
const screenOptions = {
  headerTintColor: '#4994CA',
  headerStyle: {
    backgroundColor: '#EFBACE',
  },
};

const HomeBaseTabStack = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {tabScreens.map(({name, component, options}) => (
        <Tab.Screen
          key={name}
          navigationKey={name}
          name={name}
          component={component}
          options={{...options, ...tabBaseOptions}}
        />
      ))}
    </Tab.Navigator>
  );
};

export default HomeBaseTabStack;
