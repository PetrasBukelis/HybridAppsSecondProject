import React, {Component} from 'react';
import { Text, View, Button } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

class TabScreen1 extends Component {
    render() {
      return(
        <View style ={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>TabScreen1</Text>
        </View>
      )
    }
  }
export default TabScreen1;