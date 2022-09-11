import {StyleSheet, Text} from 'react-native';
import {timeUtil} from '../../../tools';
import React from 'react';
import ActionCardView from '../../common/CardView/ActionCardView';

const TaskItem = ({item, simultaneousHandlers}) => {
  return (
    <ActionCardView
      simultaneousHandlers={simultaneousHandlers}
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
