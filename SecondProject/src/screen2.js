import React, {Component} from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Screen2 extends Component {

  constructor(props){
    super(props);

    this.state = {
       isLoading: true
    }
  }
  
  componentDidMount(){
    return fetch('https://api.myjson.com/bins/wfp4s')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.jobs,
          dataSource2: responseJson.education,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

    render() {
      
      return(
        <View style ={styles.MainContainer}>
          <View style={styles.TextContainer}>
            <Text style={styles.TextStyle}>
              Darbovieciu sarasas
            </Text>
            <View style={styles.ArrayContainer}>
            <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.id}. {item.title}, {item.position} </Text>}
          keyExtractor={({id}, index) => id}
        />
            </View>
          </View>
          <View style={styles.TextContainer}>
            <Text style={styles.TextStyle}>
            Issilavinimas
            </Text>
            <View style={styles.ArrayContainer}>
            <FlatList
          data={this.state.dataSource2}
          renderItem={({item}) => <Text>{item.id}. {item.title}, {item.degree} </Text>}
          keyExtractor={({id}, index) => id}
        />
            </View>
          </View>
        </View>
      )

      
    }
  }
  
 

  const styles = StyleSheet.create({
    container: {
      padding: 10,
      marginTop: 3,
      backgroundColor: '#d9f9b1',
      alignItems: 'center',
   },
    MainContainer:{
      flex:1,
       alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e3c962',
    },
    ArrayContainer:{
      flex:1,
      margin: 10,
      alignItems: 'flex-start',
      alignSelf: 'flex-start',
      backgroundColor: '#e3c962',
    },
    ArrayTextStyle:{
      fontSize: 20,
      fontFamily: 'sans-serif-condensed',
    },
    TextStyle:{
      fontSize: 20,
      fontFamily: 'sans-serif-condensed',
    },
    TextContainer:{
      flex:1,
      alignItems: 'center',
      alignSelf: 'center',
    }
   
  });
export default Screen2;