import CardView from '../common/CardView';
import {Text, View} from 'react-native';
import React from 'react';

const PointStatistic = ({currentUser, bindUser}) => (
  <CardView>
    <View>
      <View>
        <Text>您的积分：{currentUser.point}</Text>
      </View>
      <View>
        <Text>
          {bindUser.nickname}的积分：
          {bindUser.point}
        </Text>
      </View>
    </View>
  </CardView>
);

export default PointStatistic;
