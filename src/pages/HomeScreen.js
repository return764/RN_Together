import React, {useContext} from 'react';
import {RefreshControl, ScrollView, StyleSheet, Text, View} from 'react-native';
import StoreContext from '../store/StoreContext';
import UserBinding from '../components/UserBinding/index';
import CardView from '../components/common/CardView/CardView';
import {withScreenTransition} from '../components/hoc';
import {refreshUser} from '../api/user';

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
        <CardView>
          <View>
            <View>
              <Text>您的积分：{loginUser.point}</Text>
            </View>
            <View>
              <Text>
                {loginUser.binding.nickname}的积分：{loginUser.binding.point}
              </Text>
            </View>
          </View>
        </CardView>
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
