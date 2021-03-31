import React, {Component} from 'react';
import {OTPublisher} from 'opentok-react-native';
import {connect} from 'react-redux';

// import { styles } from './styles';
import {Button} from '@ui-kitten/components';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';
import {
  frontCameraIcon,
  backCameraIcon,
  videoIcon,
  videoOffIcon,
  audioIcon,
  audioOffIcon,
  chatIcon,
} from '../../icons';
import Backdrop from '../../UI/Backdrop/Backdrop';
import * as actions from '../../../store/actions';

class Publisher extends Component {
  constructor() {
    super();
    this.state = {
      isFrontCamera: true,
      isVideo: true,
      isAudio: false,
      publisherProperties: {
        cameraPosition: 'front',
        name: 'groupthera',
        publishVideo: true,
        publishAudio: false,
        videoSource: 'camera',
      },
    };
  }

  toggleCameraHandler = (props) => {
    const isFrontCamera = this.state.isFrontCamera;
    const cameraPosition = this.state.isFrontCamera ? 'back' : 'front';
    let publisherProperties = {...this.state.publisherProperties};
    publisherProperties['cameraPosition'] = cameraPosition;
    this.setState({
      ...this.state,
      isFrontCamera: !isFrontCamera,
      publisherProperties: publisherProperties,
    });
  };

  renderCameraIcon = (props) => (
    <TouchableWithoutFeedback onPress={this.toggleCameraHandler}>
      {!this.state.isFrontCamera
        ? backCameraIcon(props)
        : frontCameraIcon(props)}
    </TouchableWithoutFeedback>
  );

  toggleVideoHandler = (props) => {
    const isVideo = this.state.isVideo;
    const publishVideo = this.state.publisherProperties['publishVideo'];
    let publisherProperties = {...this.state.publisherProperties};
    publisherProperties['publishVideo'] = !publishVideo;
    this.setState({
      ...this.state,
      isVideo: !isVideo,
      publisherProperties: publisherProperties,
    });
  };

  renderVideoIcon = (props) => (
    <TouchableWithoutFeedback onPress={this.toggleVideoHandler}>
      {!this.state.isVideo ? videoOffIcon(props) : videoIcon(props)}
    </TouchableWithoutFeedback>
  );

  toggleAudioHandler = (props) => {
    const isAudio = this.state.isAudio;
    const publishAudio = this.state.publisherProperties['publishAudio'];
    let publisherProperties = {...this.state.publisherProperties};
    publisherProperties['publishAudio'] = !publishAudio;
    this.setState({
      ...this.state,
      isAudio: !isAudio,
      publisherProperties: publisherProperties,
    });
  };

  renderAudioIcon = (props) => (
    <TouchableWithoutFeedback onPress={this.toggleAudioHandler}>
      {!this.state.isAudio ? audioOffIcon(props) : audioIcon(props)}
    </TouchableWithoutFeedback>
  );

  renderChatIcon = (props) => (
    <TouchableWithoutFeedback onPress={this.props.onOpenChat}>
      {chatIcon(props)}
    </TouchableWithoutFeedback>
  );

  render() {
    return (
      <View
        style={[
          styles.publisherContainer,
          {height: this.props.height, width: Dimensions.get('window').width},
        ]}>
        <View style={styles.publisherControls}>
          <View style={{flexDirection: 'row'}}>
            <Button
              accessoryRight={this.renderCameraIcon}
              size="large"
              appearance="ghost"
              style={{flex: 1}}
            />
            <Button
              accessoryRight={this.renderChatIcon}
              size="large"
              appearance="ghost"
              style={{flex: 1}}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Button
              accessoryRight={this.renderVideoIcon}
              size="large"
              appearance="ghost"
              status={this.state.isVideo ? 'success' : 'danger'}
              style={{flex: 1}}
            />
            <Button
              accessoryRight={this.renderAudioIcon}
              size="large"
              appearance="ghost"
              status={this.state.isAudio ? 'success' : 'danger'}
              style={{flex: 1}}
            />
          </View>
        </View>
        <OTPublisher
          properties={this.state.publisherProperties}
          token={this.props.token}
          style={[
            styles.publisher,
            {
              height: 150,
              width: Dimensions.get('window').width / 2,
            },
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  publisher: {
    flex: 1,
    zIndex: 50,
    marginBottom: 20,
  },
  publisherControls: {
    flex: 1,
    marginRight: 5,
    padding: 5,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 50,
    backgroundColor: 'grey',
    zIndex: 50,
  },
  publisherContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginBottom: 3,
    marginTop: 3,
    flex: Dimensions.get('window').height <= 380 ? 1 : 0.33,
    flexDirection: 'row',
    zIndex: 50,
  },
});

const mapStateToProps = (state) => {
  return {
    height: state.properties.height,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOpenChat: () => dispatch(actions.openChatWindow()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Publisher);
