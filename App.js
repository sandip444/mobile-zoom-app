import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {createStackNavigator} from '@react-navigation/stack';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import LoadSplash from './src/containers/LoadSplash/LoadSplash';
import Auth from './src/containers/Auth/Auth';
import Home from './src/containers/Home/Home';
const apiKey = '46846174';
const sessionId =
  '1_MX40Njg0NjE3NH5-MTU5NTMwNzEyOTMyOH5TSWF0VHdablNHcWIwMEJJZmZhMk42WTd-fg';
const token =
  'T1==cGFydG5lcl9pZD00Njg0NjE3NCZzaWc9MTIwZDNhYjlkNGMwNDNiNDIzZjQ2Y2I1MTRmNjg4NWU1ZWIxYWI3YzpzZXNzaW9uX2lkPTFfTVg0ME5qZzBOakUzTkg1LU1UVTVOVE13TnpFeU9UTXlPSDVUU1dGMFZIZGFibE5IY1dJd01FSkpabVpoTWs0MldUZC1mZyZjcmVhdGVfdGltZT0xNTk1MzA3MjAxJm5vbmNlPTAuNDM3MDg1Nzg5MDE5MTEwOSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTk3ODk5MjAwJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9';
const Stack = createStackNavigator();
const App = () => (
  <NavigationContainer>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.dark}>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={LoadSplash} />
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{title: 'Group Thera'}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          initialParams={{apiKey: apiKey, sessionId: sessionId, token: token}}
        />
      </Stack.Navigator>
    </ApplicationProvider>
  </NavigationContainer>
);
export default App;
