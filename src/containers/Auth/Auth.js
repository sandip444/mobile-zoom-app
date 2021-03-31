import React, {Component} from 'react';
import {
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
  Text,
  Image,
  View,
} from 'react-native';
import {Input, Button, Layout} from '@ui-kitten/components';
import {
  personIcon,
  eyeOffIcon,
  eyeIcon,
  alertIcon,
} from '../../components/icons';
import {connect} from 'react-redux';
import * as actions from '../../store/actions';
import Logo from '../images/Logo.png';
class Auth extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      isSiginButtonDisabled: true,
      isSignUp: false,
      isSecureTextEntry: true,
    };
  }

  onEmailChangeHandler = (email) => {
    let isSiginButtonDisabled = true;
    if (
      email == null ||
      email == '' ||
      this.state.password == null ||
      this.state.password == ''
    ) {
      isSiginButtonDisabled = true;
    } else {
      isSiginButtonDisabled = false;
    }
    this.setState({
      ...this.state,
      email: email,
      isSiginButtonDisabled: isSiginButtonDisabled,
    });
  };

  onPasswordChangeHandler = (password) => {
    let isSiginButtonDisabled = true;
    if (
      password == null ||
      password == '' ||
      this.state.email == null ||
      this.state.email == ''
    ) {
      isSiginButtonDisabled = true;
    } else {
      isSiginButtonDisabled = false;
    }
    this.setState({
      ...this.state,
      password: password,
      isSiginButtonDisabled: isSiginButtonDisabled,
    });
  };

  submitHandler = () => {
    if (this.state.isSignUp) {
      this.props.onSignUp(this.state.email, this.state.password);
      this.setState({
        ...this.state,
        isSignUp: false,
        email: null,
        password: null,
      });
    } else {
      this.props.onSignIn(this.state.email, this.state.password);
      this.setState({
        ...this.state,
        email: null,
        password: null,
      });
      if (this.props.isAuthenticated) {
        this.props.navigation.navigate('Home', {username: this.props.email});
      }
    }
  };

  switchAuthModeHandler = () => {
    this.setState((prevState) => {
      return {isSignUp: !prevState.isSignUp, email: null, password: null};
    });
  };

  toggleSecurityEntry = () => {
    const isSecureTextEntry = this.state.isSecureTextEntry;
    this.setState({...this.state, isSecureTextEntry: !isSecureTextEntry});
  };

  renderEyeIcon = (props) => (
    <TouchableWithoutFeedback onPress={this.toggleSecurityEntry}>
      {!this.state.isSecureTextEntry ? eyeIcon(props) : eyeOffIcon(props)}
    </TouchableWithoutFeedback>
  );

  render() {
    return (
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../images/b7.jpg')}>
        <Layout style={styles.container} level="2">
          <Image source={Logo} alt="Logo image" />
          <Input
            textStyle={styles.text}
            style={styles.input}
            value={this.state.email}
            placeholder="Email"
            size="large"
            status="control"
            accessoryRight={personIcon}
            onChangeText={this.onEmailChangeHandler}
          />
          <Input
            style={styles.input}
            textStyle={styles.text}
            value={this.state.password}
            placeholder="Password"
            size="large"
            status="control"
            secureTextEntry={this.state.isSecureTextEntry}
            accessoryRight={this.renderEyeIcon}
            caption="Should contain at least 8 symbols"
            captionIcon={alertIcon}
            onChangeText={this.onPasswordChangeHandler}
          />
          <Button
            style={styles.button}
            size="large"
            appearance="filled"
            status="success"
            disabled={this.state.isSiginButtonDisabled}
            onPress={this.submitHandler}>
            {this.state.isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>
          <Button
            style={styles.link}
            size="large"
            appearance="ghost"
            status="success"
            onPress={this.switchAuthModeHandler}>
            {this.state.isSignUp ? 'Switch to Sign In' : 'Switch to Sign Up'}
          </Button>
        </Layout>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: 5,
    padding: 15,
    opacity: 0.5,
  },
  formText: {
    color: '#2D3057',
    fontSize: 19,
    fontFamily: 'GoogleSan-Bol',
    margin: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 16,
    padding: 20,
  },
  input: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 5,
    backgroundColor: 'white',
  },
  button: {},
});

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    isAuthenticated: state.auth.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignIn: (email, password) => dispatch(actions.signIn(email, password)),
    onSignUp: (email, password) => dispatch(actions.signUp(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
