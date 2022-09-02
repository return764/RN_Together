import {StyleSheet, Text, TextInput} from 'react-native';
import React, {useContext} from 'react';
import CardView from '../common/CardView/CardView';
import Button from '../common/Button';
import StoreContext from '../../store/StoreContext';

const UserBinding = ({currentUser}) => {
  const {dispatch} = useContext(StoreContext);

  return (
    <CardView>
      <TextInput
        style={styles.inputEl}
        placeholder="输入绑定用户的识别码(区别大小写)"
      />
      <Text style={styles.textEl}>您的识别码: {currentUser.identifyCode}</Text>
      <Button title="绑定" onPress={() => dispatch({type: 'BINDING'})} />
    </CardView>
  );
};

const styles = StyleSheet.create({
  inputEl: {
    height: 45,
    borderRadius: 5,
    marginVertical: 5,
    paddingLeft: 15,
    backgroundColor: '#fff',
  },
  textEl: {
    marginVertical: 10,
  },
});

export default UserBinding;
