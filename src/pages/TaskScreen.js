import React, {useCallback, useContext, useEffect, useState} from 'react';
import {SectionList, StyleSheet, Text} from 'react-native';
import {withScreenTransition} from '../components/hoc';
import CardView from '../components/common/CardView';
import StoreContext from '../store/StoreContext';
import {fetchTasks} from '../api/task';
import {timeUtil, arrObjUtils} from '../tools';

const DATA = [
  {
    title: '未完成',
    status: 0,
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
    setTasks(result);
    setFormatTasks(result);
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
    <SectionList
      contentContainerStyle={{flexGrow: 1}}
      style={styles.container}
      refreshing={refreshing}
      onRefresh={handleRefresh}
      sections={data}
      renderItem={({item}) => (
        <CardView style={styles.card}>
          <Text>{item.name}</Text>
          <Text>{item.point}积分</Text>
          <Text>截止时间：{timeUtil.formatDateTime(item.deadline)}</Text>
        </CardView>
      )}
      renderSectionHeader={({section: {title}}) => <Text>{title}</Text>}>
      <Text>TaskScreen</Text>
    </SectionList>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    marginVertical: 5,
  },
});

export default withScreenTransition(TaskScreen);
