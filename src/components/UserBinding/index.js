import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

export default function UserBinding({currentUser}) {
  return (
    <View style={styles.cardWrap}>
      <TextInput
        style={styles.inputEl}
        placeholder="输入绑定用户的识别码(区别大小写)"
      />
      <Text style={styles.textEl}>您的识别码: {currentUser.identifyCode}</Text>
      <Button title="绑定" />
    </View>
  );
}

const styles = StyleSheet.create({
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
