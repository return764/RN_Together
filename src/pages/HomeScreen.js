import React, {useContext} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import StoreContext from '../store/StoreContext';

const HomeScreen = () => {
  const {
    state: {loginUser, isBinding},
  } = useContext(StoreContext);

  return (
    <View style={styles.container}>
      {isBinding ? (
        <></>
      ) : (
        <View style={styles.cardWrap}>
          <TextInput
            style={styles.inputEl}
            placeholder="输入绑定用户的识别码(区别大小写)"
          />
          <Text style={styles.textEl}>
            您的识别码: {loginUser.identifyCode}
          </Text>
          <Button title="绑定" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  cardWrap: {
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#dee',
  },
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

export default HomeScreen;
