import React from 'react';
import Login from './src/Login'
import * as All from "react-native-elements";
import { AppRegistry } from 'react-native';

export default function App() {
  return (
    <Login/>
  );
}

AppRegistry.registerComponent('reactNativeElements', All)