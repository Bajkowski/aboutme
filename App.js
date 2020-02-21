//import 'react-native-gesture-handler';
//import {NavigationContainer} from '@react-navigation/native';
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ImageBackground, StatusBar } from "react-native";
import LoggedOut from "./src/screens/LoggedOut";
import Login from "./src/screens/Login";
import Routes from './Router'
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import reducer from './src/reducers'

const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(reducer, middleware)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Routes>
      </Routes>
      </Provider>
    );
  }
}



