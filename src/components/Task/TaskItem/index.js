import CardView from '../../common/CardView';
import {StyleSheet, Text} from 'react-native';
import {timeUtil} from '../../../tools';
import React from 'react';

const TaskItem = ({item}) => {
  return (
    <CardView style={styles.card}>
      <Text>{item.name}</Text>
      <Text>{item.point}积分</Text>
      <Text>截止时间：{timeUtil.formatDateTime(item.deadline)}</Text>
    </CardView>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
  },
});
export {TaskItem};
