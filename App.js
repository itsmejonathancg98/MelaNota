/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// import {NetworkProvider} from 'react-native-offline';

//screens for navigation
import login from './src/screens/auth-login';
import register from './src/screens/auth-register';
import dashboard from './src/screens/dashboard';
import navigation from './src/services/navigation';

const mainNavigator = createStackNavigator({
  login: {screen: login},
  register: {screen: register},
  navi: {
    screen: navigation,
    navigationOptions: {headerTitle: 'Melanota', headerShown: false},
  },
  dashboard: {
    screen: dashboard,
    navigationOptions: {headerBackTitle: 'login'},
  },
  // bottomnavi: {screen: bottomNavi},
});

const AppContainer = createAppContainer(mainNavigator);

const App = () => {
  return <AppContainer />;
};

export default App;
