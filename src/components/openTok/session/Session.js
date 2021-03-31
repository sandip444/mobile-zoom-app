
import React, { Component } from 'react';
import { Input, Button } from '@ui-kitten/components'
import { OTSession } from 'opentok-react-native';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';
import Publisher from '../publisher/Publisher';
import Subscriber from '../subscriber/Subscriber';
import { styles } from './styles';
import Backdrop from '../../UI/Backdrop/Backdrop';
import { View, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Modal from '../../UI/Modal/Modal';
import ChatWindow from '../../chatWindow/chatWindow';

// column width (relative to screen size)
// const sizes = { sm: 100, md: 50, lg: 33.333, xl: 25 }

class Session extends Component {

    constructor() {
        super();
        this.state = {
            screenHeight: null,
            screenWidth: null
        };
        this.sessionRef = React.createRef();
        this.sessionEventHandlers = {
            signal: (event) => {
                if (event.data && this.sessionRef.getSessionInfo()) {
                    const myConnectionId = this.sessionRef.getSessionInfo().connection.connectionId;
                    const message = event.connectionId === myConnectionId ? null : event.data;
                    if (message != null) {
                        this.props.onReceiveChatMessage(message);
                    }
                }
            },
        };
    }

    componentDidMount() {
        const screenHeight = Dimensions.get('window').height;
        const screenWidth = Dimensions.get('window').width;
        this.setState({ ...this.state, screenHeight: screenHeight, screenWidth: screenWidth })
        this.props.onSetNumColumns(screenHeight, screenWidth)
        this.props.onSetHeight(screenHeight, screenWidth)
    }

    render() {
        Dimensions.addEventListener('change', () => {
            const screenHeight = Dimensions.get('window').height;
            const screenWidth = Dimensions.get('window').width;
            this.props.onSetNumColumns(screenHeight, screenWidth)
            this.props.onSetHeight(screenHeight, screenWidth)
        });

        const apiKey = this.props.apiKey;
        const sessionId = this.props.sessionId;
        const token = this.props.token;

        const chatWindow = <Modal
            show={this.props.showChatWindow}
            modalClosed={this.props.onCloseChat}>
            <ChatWindow />
        </Modal>

        return (
            <React.Fragment>
                {/* <Modal
                    show={this.props.showChatWindow}
                    modalClosed={this.props.onCloseChat}>
                    <ChatWindow />
                </Modal> */}
                {this.props.showChatWindow &&
                    chatWindow}
                <OTSession
                    apiKey={apiKey}
                    sessionId={sessionId}
                    token={token}
                    style={styles.sessionContainer}
                    eventHandlers={this.sessionEventHandlers}
                    ref={(instance) => {
                        this.sessionRef = instance;
                    }}
                    signal={this.props.chatMessage}
                    name={this.props.username}>
                    <Subscriber />
                    <Publisher />
                </OTSession>
            </React.Fragment>
        );

    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetHeight: (screenHeight, screenWidth) => dispatch(actions.setHeight(screenHeight, screenWidth)),
        onSetNumColumns: (screenHeight, screenWidth) => dispatch(actions.setNumColumns(screenHeight, screenWidth)),
        onCloseChat: () => dispatch(actions.closeChatWindow()),
        onReceiveChatMessage: (message) => dispatch(actions.receiveChatMessage(message))
    };
}

const mapStateToProps = state => {
    return {
        height: state.properties.height,
        numColumns: state.properties.numColumns,
        showChatWindow: state.chat.showChatWindow,
        chatMessage: state.chat.chatMessage
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Session);