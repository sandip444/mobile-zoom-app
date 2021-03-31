

import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import authReducer from './src/store/reducers/auth';
import propertiesReducer from './src/store/reducers/properties';
import chatReducer from './src/store/reducers/chat';

const rootReducer = combineReducers({
    auth: authReducer,
    properties: propertiesReducer,
    chat: chatReducer
});

const store = createStore(rootReducer);

const groupThera = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => groupThera);
