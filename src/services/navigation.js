import login from '../screens/auth-login';
import register from '../screens/auth-register';

import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

//import bottom navigator
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import React, {Component} from 'react';

const App = createBottomTabNavigator({
  login: {
    name: 'login',
    screen: login,
    lazy: true,
    navigationOptions: {
      title: 'login',
      tabBarLabel: 'login',
      // tabBarOptions: {
      //   title: 'Title',
      //   style: {
      //     backgroundColor: 'white',
      //   },
      // },
      tabBarIcon: ({tintColor}) => (
        <View>
          <Icon
            style={[{color: tintColor}]}
            size={25}
            name={'ios-person-outline'}
          />
        </View>
      ),
    },
  },

  register: {
    name: 'register',
    screen: register,
    lazy: true,
    navigationOptions: {
      title: 'register',
      tabBarLabel: 'register',
      // tabBarOptions: {
      //   title: 'Title',
      //   style: {
      //     backgroundColor: 'white',
      //   },
      // },
      tabBarIcon: ({tintColor}) => (
        <View>
          <Icon
            style={[{color: tintColor}]}
            size={25}
            name={'ios-add-outline'}
          />
        </View>
      ),
    },
  },
});

const AppContainer = createAppContainer(App);
export default AppContainer;
