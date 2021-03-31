import React, {Component} from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {Input, Button} from '@ui-kitten/components';
import {connect} from 'react-redux';

import {sendIcon} from '../../icons';
import * as actions from '../../../store/actions';

class ChatControls extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
    };
  }

  renderSendIcon = (props) => (
    <TouchableWithoutFeedback onPress={this.sendChatMessage}>
      {sendIcon(props)}
    </TouchableWithoutFeedback>
  );

  onMessageChangeHandler = (message) => {
    this.setState({...this.state, message: message});
  };

  sendChatMessage = () => {
    const message = this.state.message;
    if (message != null) {
      if (message.trim() != '') {
        this.setState({...this.state, message: null});
        this.props.onSendChatMessage(message);
      }
    }
  };

  render() {
    return (
      <View style={styles.chatWindowControls}>
        <Input
          style={{flex: 4}}
          placeholder="Enter message..."
          multiline={true}
          textStyle={{minHeight: 30, maxHeight: 100}}
          value={this.state.message}
          onChangeText={this.onMessageChangeHandler}
        />
        <Button
          accessoryRight={this.renderSendIcon}
          size="large"
          appearance="ghost"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  chatWindowControls: {
    flexDirection: 'row',
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    onSendChatMessage: (message) => dispatch(actions.sendChatMessage(message)),
  };
};

export default connect(null, mapDispatchToProps)(ChatControls);
