import React, {Component} from 'react';
import { Text, View, Button, Image,StyleSheet, AsyncStorage } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


class Screen1 extends Component {
  state = {
    'name': '',
    'about':'asdasdewqqw asdqweasd eqweqasddaswqe dassda'
 }

 componentDidMount(){
AsyncStorage.getItem('name').then((value) => this.setState({ 'name': value }))
AsyncStorage.getItem('about').then((value) => this.setState({ 'about': value }))
 }
 
  
  render() {
   
    return (
      <View style={{ flex: 1}}>
        <View style={styles.ImageContainer}>
            <Image source={require('./Picture.png')} style={styles.PictureStyle}>
            </Image>
            <View style={{flex: 1}}>
            <Text style={styles.ImageTextStyle}>
              {this.state.name}
            </Text>
            <View style={{flex: 1}}>
            <Text style={styles.ImageTextStyle2}>
              {this.state.about}
            </Text>
            </View>
            </View>
            
            
          </View>
          <View style={styles.ButtonContainer}>
            <View style={styles.ButtonStyle}>
            <Button 
          color="#b88a46"
          title="Darbo patirtis"
            onPress={() => this.props.navigation.navigate('DarboPatirtis')}/>
            </View>
            <View style={styles.ButtonStyle}>
            <Button 
          color="#b88a46"
          title="Asmeniniu gebejimu langas"
            onPress={() => this.props.navigation.navigate('AsmeniniaiGebejimai')}/>
            </View>
          </View>
          <View style={styles.ButtonContainer2}>
          <View style={styles.ButtonStyle2}>
            <Button 
          color="#b88a46"
          title="Keisti Informacija"
            onPress={() => this.props.navigation.navigate('KeistiInformacija')}/>
            </View>
          </View>

      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  ButtonStyle:{
    width: 150,
			height: 30,
			margin: 20,
  },
  ButtonStyle2:{
    width: 200,
			height: 30,
			margin: 10,
  },
  ButtonContainer:{
    flex: 2,
     alignItems: 'flex-start',
     justifyContent: 'space-evenly',
     flexDirection: 'row',
    backgroundColor: '#e3c962'
  },
  ButtonContainer2:{
    flex: 1,
     alignItems: 'flex-start',
     justifyContent: 'space-evenly',
     flexDirection: 'row',
    backgroundColor: '#e3c962'
  },
  PictureStyle: {
    resizeMode: 'cover',
    borderWidth: 15,
    borderColor: '#e3c962',
    height: 300,
    width: 200

  },
  ImageTextStyle: {
    fontSize: 25,
    fontFamily: 'sans-serif-condensed',
  },
  ImageTextStyle2: {
    fontSize: 17,
    fontFamily: 'sans-serif-condensed',
  },
  ImageContainer:{
    flex: 4,flexDirection:'row',backgroundColor: '#e3c962'
  },
 
});
export default Screen1;