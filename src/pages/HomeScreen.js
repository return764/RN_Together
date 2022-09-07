import React, {useCallback, useContext, useState} from 'react';
import {RefreshControl, ScrollView, StyleSheet} from 'react-native';
import AuthContext from '../store/AuthContext';
import UserBinding from '../components/UserBinding/index';
import {withScreenTransition} from '../components/hoc';
import {refreshUser} from '../api/user';
import PointStatistic from '../components/PointStatistic';
import {useAuthentication} from '../hooks/UseAuthentication';
import {AuthType} from '../store/config';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

const HomeScreen = () => {
  const {
    state: {binding, isBinding},
    dispatch,
  } = useContext(AuthContext);

  const user = useAuthentication();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);

    // 加载数据
    const data = await refreshUser();
    dispatch({type: AuthType.REFRESH_USER, payload: data});
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
        <PointStatistic currentUser={user} bindUser={binding} />
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

export default gestureHandlerRootHOC(withScreenTransition(HomeScreen));
