import {StyleSheet, Text} from 'react-native';
import {timeUtil} from '../../../tools';
import React, {useContext} from 'react';
import ActionCardView from '../../common/CardView/ActionCardView';
import {useNavigation} from '@react-navigation/native';
import {updateTaskStatus} from '../../../api/task';
import TaskContext from '../../../store/TaskContext';
import {TaskType} from '../../../store/config';
import Toast from 'react-native-toast-message';

const TaskItem = ({item, simultaneousHandlers}) => {
  const navigation = useNavigation();
  const {dispatch} = useContext(TaskContext);
  const completeTask = async () => {
    const task = await updateTaskStatus(item.id, 1);
    if (task) {
      dispatch({type: TaskType.UPDATE, payload: task});
    } else {
      Toast.show({type: 'error', text1: '更新任务失败'});
    }
  };

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
