import React, {useContext, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {enableLayoutAnimations} from 'react-native-reanimated';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {timeUtil} from '../tools';
import Button from '../components/common/Button';
import {useForm} from '../hooks/UseForm';
import {createTask} from '../api/task';
import AuthContext from '../store/AuthContext';
import Toast from 'react-native-toast-message';

const TaskCreateScreen = ({navigation}) => {
  enableLayoutAnimations(false);
  const {
    state: {binding},
  } = useContext(AuthContext);
  const [task, resetForm, {setName, setDescription, setPoint, setDeadline}] =
    useForm({
      name: '',
      description: '',
      point: '',
      targetId: binding.id,
      deadline: '',
    });
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const handleConfirmDateTimeSelect = date => {
    setIsDatePickerVisible(false);
    setDeadline(timeUtil.formatDateTime(date));
  };
  const handleSubmit = async () => {
    const result = await createTask(task);
    if (result) {
      Toast.show({
        text1: '创建任务成功',
      });
      resetForm();
      navigation.navigate('HomeStack', {screen: 'Task'});
    }
  };
  return (
    <View style={[styles.container]}>
      <TextInput
        style={styles.inputEl}
        onChangeText={text => setName(text)}
        value={task.name}
        placeholder="任务名"
      />
      <TextInput
        style={[styles.inputEl, styles.inputAreaEl]}
        multiline
        onChangeText={text => setDescription(text)}
        value={task.description}
        placeholder="任务描述"
      />
      <TextInput
        style={styles.inputEl}
        placeholder="积分值"
        onChangeText={text => setPoint(text)}
        value={task.point}
      />
      <View style={styles.timePickerAction}>
        <TextInput
          style={[styles.inputEl, styles.timePickerInput]}
          placeholder="截止时间"
          value={task.deadline}
          editable={false}
        />
        <Button
          style={styles.timePickerButton}
          title={'选择'}
          onPress={() => setIsDatePickerVisible(true)}
        />
      </View>
      <View style={{flex: 1}} />
      <Button style={styles.submitButton} title="提交" onPress={handleSubmit} />

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        date={new Date()}
        onConfirm={handleConfirmDateTimeSelect}
        onCancel={() => setIsDatePickerVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  inputEl: {
    height: 40,
    borderRadius: 5,
    marginVertical: 5,
    paddingLeft: 15,
    backgroundColor: '#fff',
  },
  inputAreaEl: {
    height: 120,
    textAlignVertical: 'top',
  },
  timePickerInput: {
    flex: 3,
  },
  timePickerButton: {
    flex: 1,
    height: 40,
    marginVertical: 5,
    marginStart: 10,
  },
  timePickerAction: {
    flexDirection: 'row',
  },
  submitButton: {
    height: 40,
    marginBottom: 40,
  },
});

export default TaskCreateScreen;
