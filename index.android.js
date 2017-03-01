/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './app/components/App';

//import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './app/store';

export default class GalleryProject extends Component {
  render() {
    return (
        <Provider store={store}>
          <App />
        </Provider>
    );
  }
}
// const styles = StyleSheet.create({
//   gallery: {
//     flex: 1,
//     justifyContent: 'space-between'
//     flexDirection: 'row'
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//  })
AppRegistry.registerComponent('GalleryProject', () => GalleryProject);
