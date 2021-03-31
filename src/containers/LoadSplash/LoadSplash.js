import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import Logo from '../images/Logo.png';
class LoadingScene extends Component {
  static navigationOptions = {};

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Auth');
    }, 2000);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={Logo} alt="Logo image" />
        <Text>Video Chat App</Text>
      </View>
    );
  }
}
export default LoadingScene;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5257F2',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
