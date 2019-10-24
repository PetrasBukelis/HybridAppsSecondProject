import React, {Component} from 'react';
import { Text, View, StyleSheet, AsyncStorage} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';

class Screen4 extends Component {
  state = {
    'name': '',
    'about':''
 }

 componentDidMount(){
AsyncStorage.getItem('name').then((value) => this.setState({ 'name': value }))
AsyncStorage.getItem('about').then((value) => this.setState({ 'about': value }))
 }
 
 setName = (value) => {
   AsyncStorage.setItem('name', value);
   this.setState({ 'name': value });
}

setAbout = (value) => {
   AsyncStorage.setItem('about', value);
   this.setState({ 'about': value });
}

 render() {
    return (
       <View style = {styles.container}>
          <Text>Enter your name</Text>
          <TextInput style = {styles.textInput} autoCapitalize = 'none'
          onChangeText = {this.setName}/>
          <Text>
             Current name : {this.state.name}
          </Text>
          <Text>Enter info about yourself</Text>
          <TextInput style = {styles.textInput} autoCapitalize = 'none'
          onChangeText = {this.setAbout}/>
          <Text>
             Current info about you : {this.state.about}
          </Text>
       </View>
    )
 }
}
export default Screen4

const styles = StyleSheet.create ({
  container: {
     flex: 1,
     alignItems: 'center',
     backgroundColor: '#e3c962'
  },
  textInput: {
     margin: 5,
     height: 50,
     borderWidth: 1,
     backgroundColor: 'white'
  }
})