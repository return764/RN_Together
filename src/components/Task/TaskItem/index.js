import {StyleSheet, Text} from 'react-native';
import {timeUtil} from '../../../tools';
import React, {useContext} from 'react';
import ActionCardView from '../../common/CardView/ActionCardView';
import {useNavigation} from '@react-navigation/native';
import {TaskStatus, updateTaskStatus} from '../../../api/task';
import TaskContext from '../../../store/TaskContext';
import {TaskType} from '../../../store/config';
import Toast from 'react-native-toast-message';

const TaskItem = ({item, simultaneousHandlers}) => {
  const navigation = useNavigation();
  const {dispatch} = useContext(TaskContext);

  const updateTask = async status => {
    const task = await updateTaskStatus(item.id, status);
    if (task) {
      dispatch({type: TaskType.UPDATE, payload: task});
    } else {
      Toast.show({type: 'error', text1: '更新任务失败'});
    }
  };

  const completeTask = async () => {
    await updateTask(TaskStatus.TO_EXAMINE);
  };

  const passingTask = async () => {
    await updateTask(TaskStatus.COMPLETED);
  };

  const abortTask = async () => {
    await updateTask(TaskStatus.UNCOMPLETED);
  };

  const goToTaskDetail = () => {
    navigation.navigate('TaskDetail', {id: item.id});
  };

  const resolveActions = () => {
    if (item.status === TaskStatus.UNCOMPLETED) {
      return {
        leftActionText: '完成',
        rightActionText: '详情',
        onRightAction: goToTaskDetail,
        onLeftAction: completeTask,
      };
    }

    if (item.status === TaskStatus.TO_EXAMINE) {
      return {
        leftActionText: '驳回',
        rightActionText: '通过',
        onRightAction: passingTask,
        onLeftAction: abortTask,
      };
    }

    return {
      leftActionText: '删除',
      rightActionText: '详情',
      onRightAction: goToTaskDetail,
      onLeftAction: () => {},
    };
  };

  const actions = resolveActions();

  return (
    <ActionCardView
      simultaneousHandlers={simultaneousHandlers}
      style={styles.card}
      {...actions}>
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
