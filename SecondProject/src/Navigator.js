import React, {Component} from 'react';
import { Text, View, Button } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Screen1 from './screen1.js';
import Screen2 from './screen2.js';
import Screen3 from './screen3.js';
import Screen4 from './screen4.js';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Screen1,
    navigationOptions: () => ({
      title: 'Gyvenimo aprasymas',
      headerTitleStyle: { 
        textAlign:"center", 
        flex:1 ,
        fontSize: 25,
        fontFamily: 'sans-serif-condensed',
    },
    headerStyle: {
      backgroundColor: '#e3c962',
    },
    headerTintColor: '#f5f3f0',
    })
      
  }, 
  DarboPatirtis: {
    screen: Screen2,
    navigationOptions: () => ({
      title: 'Darbo Patirtis',
      headerTitleStyle: { 
        textAlign:"center", 
        flex:1 ,
        fontSize: 25,
        fontFamily: 'sans-serif-condensed',
    },
    headerStyle: {
      backgroundColor: '#e3c962',
    },
    headerTintColor: '#f5f3f0',
    })
  },
  AsmeniniaiGebejimai: {
    screen: Screen3,
    navigationOptions: () => ({
      title: 'Asmeniniai gebejimai',
      headerTitleStyle: { 
        textAlign:"center", 
        flex:1 ,
        fontSize: 25,
        fontFamily: 'sans-serif-condensed',
    },
    headerStyle: {
      backgroundColor: '#e3c962',
    },
    headerTintColor: '#f5f3f0',
    })
  },
  KeistiInformacija: {
    screen: Screen4,
    navigationOptions: () => ({
      title: 'Informacijos Keitimas',
      headerTitleStyle: { 
        textAlign:"center", 
        flex:1 ,
        fontSize: 25,
        fontFamily: 'sans-serif-condensed',
    },
    headerStyle: {
      backgroundColor: '#e3c962',
    },
    headerTintColor: '#f5f3f0',
    })
  }
}, {
  initialRouteName: 'Home',
})

const Navigator = createAppContainer(AppNavigator);

export default Navigator;