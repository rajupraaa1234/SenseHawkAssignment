/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { LogBox } from 'react-native';
import RootNavigation from './src/Navigation/RootNavigation';
import { ToastProvider } from 'react-native-toast-notifications'

LogBox.ignoreAllLogs();

const App = () => {
  return (
    <ToastProvider>
      <RootNavigation />
    </ToastProvider>
  )
}

export default App;
