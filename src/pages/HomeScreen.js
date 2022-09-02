import React, {useContext} from 'react';
import {RefreshControl, ScrollView, StyleSheet, Text, View} from 'react-native';
import StoreContext from '../store/StoreContext';
import UserBinding from '../components/UserBinding/index';
import {load} from '../utils/store';
import CardView from '../components/common/CardView/CardView';
import {withScreenTransition} from '../components/hoc';

const HomeScreen = () => {
  const {
    state: {loginUser, isBinding},
    dispatch,
  } = useContext(StoreContext);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);

    // 加载数据
    const data = await load('@user');
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
        <UserBinding currentUser={loginUser} />
      ) : (
        <CardView>
          <View>
            <View>
              <Text>xxx的积分：1</Text>
            </View>
            <View>
              <Text>xxx的积分：22</Text>
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
