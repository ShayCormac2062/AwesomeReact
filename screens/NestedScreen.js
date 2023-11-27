import React from 'react';
import {View, Text, Button} from 'react-native';

const NestedScreen = ({navigation}) => {
  return (
    <View>
      <Text>Nested Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default NestedScreen;
