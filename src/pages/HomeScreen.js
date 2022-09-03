import React, {useContext} from 'react';
import {RefreshControl, ScrollView, StyleSheet} from 'react-native';
import StoreContext from '../store/StoreContext';
import UserBinding from '../components/UserBinding/index';
import {withScreenTransition} from '../components/hoc';
import {refreshUser} from '../api/user';
import PointStatistic from '../components/PointStatistic';

const HomeScreen = () => {
  const {
    state: {loginUser, isBinding},
    dispatch,
  } = useContext(StoreContext);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);

    // 加载数据
    const data = await refreshUser();
    dispatch({type: 'REFRESH_USER', payload: data});
    setRefreshing(false);
  }, [dispatch]);

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      style={styles.container}>
      {!isBinding ? (
        <UserBinding />
      ) : (
        <PointStatistic currentUser={loginUser} bindUser={loginUser.binding} />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  innerContainer: {
    height: '100%',
  },
});

export default withScreenTransition(HomeScreen);
