import {Text} from 'react-native';
import React from 'react';

const TaskSectionHeader = ({section}) => {
  return (
    <Text>
      {section.title} {section.data.length}
    </Text>
  );
};

export {TaskSectionHeader};
