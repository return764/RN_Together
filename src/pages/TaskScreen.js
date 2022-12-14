import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {SectionList, StyleSheet} from 'react-native';
import {withScreenTransition} from '../components/hoc';
import {fetchTasks, TaskStatus} from '../api/task';
import {TaskItem} from '../components/Task/TaskItem';
import {TaskSectionHeader} from '../components/Task/TaskSectionHeader';
import Button from '../components/common/Button';
import {useNavigation} from '@react-navigation/native';
import {useAuthentication} from '../hooks/UseAuthentication';
import TaskContext from '../store/TaskContext';
import {TaskType} from '../store/config';
import {
  gestureHandlerRootHOC,
  NativeViewGestureHandler,
} from 'react-native-gesture-handler';

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
  const user = useAuthentication();
  const {tasks, dispatch} = useContext(TaskContext);
  const scrollRef = useRef(null);

  const [data, setData] = useState(DATA);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  const setFormatData = useCallback(taskList => {
    const dividedByStatusTask = {};
    for (const status of Object.values(TaskStatus)) {
      dividedByStatusTask[status] = taskList.filter(
        task => task.status === status,
      );
    }
    setData(prevData => {
      prevData.forEach(dataOne => {
        dataOne.data = dividedByStatusTask[dataOne.status];
      });
      return [...prevData];
    });
  }, []);

  const loadTasks = useCallback(async () => {
    const result = await fetchTasks(user.id);
    if (result) {
      dispatch({type: TaskType.REFRESH, payload: result});
    }
  }, [user.id, dispatch]);

  useEffect(() => {
    loadTasks().then(r => r);
  }, [loadTasks, user.id]);

  useEffect(() => {
    setFormatData(tasks);
  }, [setFormatData, tasks]);

  const handleRefresh = async () => {
    setRefreshing(true);
    await loadTasks();
    setRefreshing(false);
  };

  return (
    <>
      <NativeViewGestureHandler ref={scrollRef}>
        <SectionList
          style={styles.container}
          contentContainerStyle={{flexGrow: 1}}
          refreshing={refreshing}
          onRefresh={handleRefresh}
          sections={data}
          renderItem={({item}) => (
            <TaskItem simultaneousHandlers={scrollRef} item={item} />
          )}
          renderSectionHeader={({section}) => (
            <TaskSectionHeader section={section} />
          )}
        />
      </NativeViewGestureHandler>
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

export default gestureHandlerRootHOC(withScreenTransition(TaskScreen));
