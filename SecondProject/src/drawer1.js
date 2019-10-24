import React, {Component} from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';


/*class Drawer1 extends Component {
    render() {
      return(
        <View style ={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Drawer</Text>
        </View>
      )
    }
  }*/
  class NavigationDrawerStructure extends Component {
    //Structure for the navigatin Drawer
    toggleDrawer = () => {
      //Props to open/close the drawer
      this.props.navigationProps.toggleDrawer();
    };
    render() {
      return (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
            {/*Donute Button Image */}
            <Image
              source={{uri: 'https://previews.123rf.com/images/urfandadashov/urfandadashov1808/urfandadashov180810723/106757057-drawer-icon-vector-isolated-on-white-background-drawer-transparent-sign-line-or-linear-design-elemen.jpg'}}
              style={{ width: 25, height: 25, marginLeft: 5 }}
            />
          </TouchableOpacity>
        </View>
      );
    }
  }
   class Screen1 extends Component {
    //Screen1 Component
    render() {
      return (
        <View style={styles.MainContainer}>
          <Text style={{ fontSize: 23 }}> Screen 1 </Text>
        </View>
      );
    }
  }
  class Screen2 extends Component {
    //Screen2 Component
    render() {
      return (
        <View style={styles.MainContainer}>
          <Text style={{ fontSize: 23 }}> Screen 2 </Text>
        </View>
      );
    }
  }

  const FirstActivity_StackNavigator = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    First: {
      screen: Screen1,
      navigationOptions: ({ navigation }) => ({
        title: 'Demo Screen 1',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),
    },
  });
  
  //For React Navigation 2.+ need to use StackNavigator instead createStackNavigator
  //const FirstActivity_StackNavigator = StackNavigator({
  
  //For React Navigation 3.+
  const Screen2_StackNavigator = createStackNavigator({
    //All the screen from the Screen2 will be indexed here
    Second: {
      screen: Screen2,
      navigationOptions: ({ navigation }) => ({
        title: 'Demo Screen 2',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
  
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),
    },
  });
  const Drawer1 = createDrawerNavigator({
    //Drawer Options and indexing
    Screen1: {
      //Title
      screen: FirstActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Demo Screen 1',
      },
    },
  
    Screen2: {
      //Title
      screen: Screen2_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Demo Screen 2',
      },
    }
  

  });
  const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      paddingTop: 20,
      alignItems: 'center',
      marginTop: 50,
      justifyContent: 'center',
    },
  });
export default Drawer1;