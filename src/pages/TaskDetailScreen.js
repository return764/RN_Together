import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {fetchTask} from '../api/task';
import CardView from '../components/common/CardView';
import {material} from 'react-native-typography';
import {formatDateTime} from '../tools/timeTools';

const TaskDetailScreen = ({route}) => {
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetchTask(route.params.id).then(data => {
      console.log(data);
      setTask(data);
    });
  }, [route.params.id]);

  return (
    <View style={styles.container}>
      {task && (
        <>
          <CardView style={{marginBottom: 10}}>
            <Text style={material.title}>任务名称：</Text>
            <Text>{task.name}</Text>
          </CardView>
          <CardView style={{marginBottom: 10}}>
            <Text style={material.title}>任务描述：</Text>
            <Text>{task.description}</Text>
          </CardView>
          <CardView style={{marginBottom: 10}}>
            <Text style={material.title}>积分：</Text>
            <Text>{task.point}</Text>
          </CardView>
          <CardView>
            <Text style={material.title}>创建时间：</Text>
            <Text>{formatDateTime(task.createAt)}</Text>
            <Text style={material.subheading}>截止时间：</Text>
            <Text>{formatDateTime(task.deadline)}</Text>
          </CardView>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default gestureHandlerRootHOC(TaskDetailScreen);
