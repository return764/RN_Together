import React, {useCallback, useContext, useEffect, useState} from 'react';
import {SectionList, StyleSheet, View} from 'react-native';
import {withScreenTransition} from '../components/hoc';
import StoreContext from '../store/StoreContext';
import {fetchTasks} from '../api/task';
import {arrObjUtils} from '../tools';
import {TaskItem} from '../components/Task/TaskItem';
import {TaskSectionHeader} from '../components/Task/TaskSectionHeader';
import Button from '../components/common/Button';
import {useNavigation} from '@react-navigation/native';

const DATA = [
  {
    title: '未完成',
    status: 0,
    data: [],
  },
  {
    title: '待审核',
    status: 1,
    data: [],
  },
  {
    title: '已完成',
    status: 2,
    data: [],
  },
];

const TaskScreen = () => {
  const {
    state: {loginUser},
  } = useContext(StoreContext);

  const [tasks, setTasks] = useState([]);
  const [data, setData] = useState(DATA);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  const setDataWithStatus = (dataOne, status) => {
    setData(prevData => {
      const foundData = prevData.find(item => item.status === status).data;
      if (!arrObjUtils.containObject(foundData, dataOne, 'id')) {
        foundData.push(dataOne);
      }
      return [...prevData];
    });
  };

  const setFormatTasks = useCallback(taskList => {
    taskList.forEach(task => {
      setDataWithStatus(task, task.status);
    });
  }, []);

  const loadTasks = useCallback(async () => {
    const result = await fetchTasks(loginUser.id);
    if (result) {
      setTasks(result);
      setFormatTasks(result);
    }
  }, [loginUser.id, setFormatTasks]);

  useEffect(() => {
    loadTasks().then(r => r);
  }, [loadTasks, loginUser.id, setFormatTasks]);

  const handleRefresh = async () => {
    setRefreshing(true);
    await loadTasks();
    setRefreshing(false);
  };

  return (
    <>
      <SectionList
        style={styles.container}
        contentContainerStyle={{flexGrow: 1}}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        sections={data}
        renderItem={({item}) => <TaskItem item={item} />}
        renderSectionHeader={({section}) => (
          <TaskSectionHeader section={section} />
        )}
      />
      <Button
        title={'新增'}
        onPress={() => {
          navigation.navigate('TaskCreate');
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default withScreenTransition(TaskScreen);
