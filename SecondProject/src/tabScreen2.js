import React, {Component} from 'react';
import { Text, View, Button } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Drawer1 from './drawer1.js';

class TabScreen extends Component {
    render() {
      return(
        <View style ={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>TabScreen2</Text>
        <Button 
            title="Go to drawer screen"
            onPress={() => this.props.navigation.navigate('Drawer')}/>
        </View>
      )
    }
  }

const TabScreenas = createStackNavigator({
    Tab: {
      screen: TabScreen,
    }, 
    Drawer: {
      screen: Drawer1,
    },
  },
  { 
    headerMode: 'none',
  }, 
  {
    initialRouteName: 'Tab',
  })
  const TabScreen2 = createAppContainer(TabScreenas);
  export default TabScreen2;