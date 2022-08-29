import React, {useContext} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {useForm} from '../hooks/UseForm';
import Toast from 'react-native-toast-message';
import {register} from '../api/user';
import StoreContext from '../store/StoreContext';

const SignUpScreen = () => {
  const {dispatch} = useContext(StoreContext);
  const [form, , {setUsername, setNickname, setPassword, setPasswordRepeat}] =
    useForm({
      username: '',
      nickname: '',
      password: '',
      passwordRepeat: '',
    });

  function verifyForm() {
    if (form.password !== form.passwordRepeat) {
      Toast.show({
        type: 'error',
        text1: '两次密码不一致',
      });
      return false;
    }
    return true;
  }

  const handleRegister = async () => {
    if (verifyForm()) {
      const user = await register({
        username: form.username,
        nickname: form.nickname,
        password: form.password,
      });
      if (user) {
        Toast.show({
          text1: '登录成功!',
        });
        dispatch({type: 'LOGIN', payload: user});
        // 导航至主页
      }
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.inputEl}
          onChangeText={v => setUsername(v)}
          placeholder="用户名"
        />
        <TextInput
          style={styles.inputEl}
          onChangeText={v => setNickname(v)}
          placeholder="昵称"
        />
        <TextInput
          style={styles.inputEl}
          onChangeText={v => setPassword(v)}
          placeholder="密码"
        />
        <TextInput
          style={styles.inputEl}
          onChangeText={v => setPasswordRepeat(v)}
          placeholder="第二次密码"
        />
      </View>
      <View style={styles.registerButton}>
        <Button title="注册并登录" onPress={handleRegister} />
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
