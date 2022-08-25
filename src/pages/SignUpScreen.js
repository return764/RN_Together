import React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <TextInput style={styles.inputEl} placeholder="用户名" />
        <TextInput style={styles.inputEl} placeholder="密码" />
        <TextInput style={styles.inputEl} placeholder="第二次密码" />
      </View>
      <View style={styles.registerButton}>
        <Button title="注册" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  inputEl: {
    height: 45,
    borderRadius: 5,
    marginVertical: 5,
    paddingLeft: 15,
    backgroundColor: '#fff',
  },
  registerButton: {
    marginTop: 10,
  },
});

export default SignUpScreen;
