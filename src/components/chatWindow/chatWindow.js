import React from 'react';
import {View} from 'react-native';
import ChatMessagesView from './chatMessages/chatMessages';
import ChatWindowControls from './chatControls/chatControls';

const ChatWindow = () => (
  <View style={{flexDirection: 'column', flex: 1}}>
    <ChatMessagesView />
    <ChatWindowControls />
  </View>
);

export default ChatWindow;
