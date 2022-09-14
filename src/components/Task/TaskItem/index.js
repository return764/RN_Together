import {StyleSheet, Text} from 'react-native';
import {timeUtil} from '../../../tools';
import React from 'react';
import ActionCardView from '../../common/CardView/ActionCardView';
import {useNavigation} from '@react-navigation/native';

const TaskItem = ({item, simultaneousHandlers}) => {
  const navigation = useNavigation();
  const completeTask = () => {};

  const goToTaskDetail = () => {
    navigation.navigate('TaskDetail', {id: item.id});
  };

  return (
    <ActionCardView
      simultaneousHandlers={simultaneousHandlers}
      onLeftAction={completeTask}
      onRightAction={goToTaskDetail}
      style={styles.card}>
      <Text>{item.name}</Text>
      <Text>{item.point}积分</Text>
      <Text>截止时间：{timeUtil.formatDateTime(item.deadline)}</Text>
    </ActionCardView>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
  },
});
export {TaskItem};
