import React from 'react';
import Navigators from './navigator';
import {DevSettings, StyleSheet} from 'react-native';
import Toast from 'react-native-toast-message';
import {NavigationContainer} from '@react-navigation/native';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {StoreContextProvider} from './store/StoreContext';
import {clearStore} from './utils/store';

DevSettings.addMenuItem('清除AsyncStore', async () => {
  await clearStore();
});

const App = () => {
  return (
    <>
      <StoreContextProvider>
        <NavigationContainer>
          <Navigators />
        </NavigationContainer>
      </StoreContextProvider>
      <Toast />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default gestureHandlerRootHOC(App);
