import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const chatMessage = (props) => {
  const sender = props.sender;
  const message = props.message;
  const messageStyle = {
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    margin: 1,
  };
  return (
    <View
      style={[
        {flexDirection: 'row'},
        sender == 'Me'
          ? {justifyContent: 'flex-end'}
          : {justifyContent: 'flex-start'},
      ]}>
      <Text
        style={[
          messageStyle,
          sender == 'Me'
            ? {backgroundColor: 'lightgreen'}
            : {backgroundColor: 'lightblue'},
          {maxWidth: '85%'},
        ]}>
        {message}
      </Text>
    </View>
  );
};
export default chatMessage;
