import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import ChatMessage from './chatMessage/chatMessage';

const ChatMessages = (props) => {
    const chatMessages = props.chatMessages.map((chatMessage) => (
        <ChatMessage
            sender={Object.keys(chatMessage)[0]}
            message={Object.values(chatMessage)[0]} />
    ));

    return (
        <View style={{ flex: 5, marginBottom: 15, borderWidth: 1, borderRadius: 5, padding: 5 }}>
            <ScrollView
                style={{ flexDirection: "column"}}>
                {chatMessages}
            </ScrollView>
        </View>
    );
}

const mapStateToProps = state => {
    return {
        chatMessages: state.chat.chatMessages
    };
}

export default connect(mapStateToProps)(ChatMessages);