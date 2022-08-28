import React, {useContext, useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useNavigation} from '@react-navigation/native';
import {login} from '../api/user';
import StoreContext from '../store/StoreContext';

const SignInScreen = () => {
  const navigation = useNavigation();
  const {setLoginUser} = useContext(StoreContext);
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  });

  const goToRegister = () => {
    navigation.navigate('SignUp');
  };

  const setUsername = username => {
    setLoginForm({...loginForm, username});
  };

  const setPassword = password => {
    setLoginForm({...loginForm, password});
  };

  const handleLogin = async () => {
    const loginUser = await login(loginForm);
    // 保存登录用户
    if (loginUser) {
      setLoginUser(loginUser);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputEl}
          onChangeText={text => setUsername(text)}
          placeholder="请输入用户名"
        />
        <TextInput
          style={styles.inputEl}
          onChangeText={text => setPassword(text)}
          placeholder="请输入密码"
        />
        <View style={styles.inputActions}>
          <TouchableOpacity style={styles.inputAction}>
            <BouncyCheckbox
              style={styles.checkbox}
              disableText
              size={20}
              fillColor="red"
            />
            <Text>记住密码</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goToRegister} style={styles.inputAction}>
            <Text>前往注册</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Button onPress={handleLogin} title="登录" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    display: 'flex',
    height: '100%',
    justifyContent: 'space-around',
  },
  inputContainer: {
    display: 'flex',
  },
  rememberMe: {
    marginVertical: 5,
  },
  checkbox: {
    marginRight: 10,
  },
  inputActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  inputAction: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputEl: {
    height: 45,
    borderRadius: 5,
    marginVertical: 5,
    paddingLeft: 15,
    backgroundColor: '#fff',
  },
});

export default SignInScreen;
