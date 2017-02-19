/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import App from './src/application'
import { AppRegistry } from 'react-native';

export default class Dash extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('Dash', () => Dash);

AppRegistry.runApplication('Dash', {
  rootTag: document.getElementById('react-root')
});
