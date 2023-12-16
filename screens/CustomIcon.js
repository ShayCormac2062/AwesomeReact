import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomIcon = (name) => {
  return (
    <View>
      <Icon name={name.toString()} size={30} color="#009" />
    </View>
  );
};

export default CustomIcon;
