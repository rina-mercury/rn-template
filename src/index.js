/* eslint-disable no-undef */
/**
 * @format
 */

import { AppRegistry, Platform } from 'react-native';
import App from './App.tsx';

AppRegistry.registerComponent('App', () => App);
if (Platform.OS === 'web') {
  AppRegistry.runApplication('App', {
    rootTag: document?.getElementById('react-root'),
  });
}
