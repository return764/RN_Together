import {StyleSheet, Text, TextInput} from 'react-native';
import React, {useContext, useState} from 'react';
import CardView from '../common/CardView';
import Button from '../common/Button';
import AuthContext from '../../store/AuthContext';
import {material} from 'react-native-typography';
import {colors} from '../../utils/setting';
import {bindUser} from '../../api/user';
import Toast from 'react-native-toast-message';
import {useAuthentication} from '../../hooks/UseAuthentication';
import {AuthType} from '../../store/config';

const UserBinding = () => {
  const {dispatch} = useContext(AuthContext);
  const user = useAuthentication();
  const [identifyCode, setIdentifyCode] = useState('');

  const handleBindUser = async () => {
    const result = await bindUser(user.id, identifyCode);
    if (result) {
      Toast.show({
        type: 'success',
        text1: '绑定用户成功',
      });
      dispatch({type: AuthType.REFRESH_USER, payload: result});
    }
  };

  return (
    <CardView>
      <TextInput
        style={styles.inputEl}
        onChangeText={text => setIdentifyCode(text)}
        placeholder="输入绑定用户的识别码(区别大小写)"
      />
      <Text style={styles.textEl}>
        您的识别码:
        <Text style={{...material.headline, color: colors.tertiary}}>
          {user.identifyCode}
        </Text>
      </Text>
      <Button title="绑定" onPress={handleBindUser} />
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
