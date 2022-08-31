import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import StoreContext from '../store/StoreContext';
import UserBinding from '../components/UserBinding/index';

const HomeScreen = () => {
  const {
    state: {loginUser, isBinding},
  } = useContext(StoreContext);

  return (
    <View style={styles.container}>
      {!isBinding && <UserBinding currentUser={loginUser} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default HomeScreen;
