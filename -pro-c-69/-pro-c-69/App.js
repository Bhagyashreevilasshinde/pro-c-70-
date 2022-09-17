import React, { Component } from 'react';

import { StyleSheet, View, Alert, TextInput, Text } from 'react-native';
 
export default class MyProject extends Component {

  constructor()
  {
    super();
  
    this.state={
        /*Find the bug in the below code*/

      TextValue
  
    }
  }
    
     GetValueFunction = (ValueHolder) =>{
      
      var Value = ValueHolder.length.toString() ;
      /*Find the bug in the below code*/

      this.setState({TextValue : Value}) ;
    
     }
    
     render() {
       return (
    
   <View style={styles.MainContainer}>

      <Text style={styles.TextStyle}> { this.state.TextValue } </Text>
     <Text>{this.setState}</Text>

      <TextInput
             
        placeholder="Enter Text here"
          /*Find the bug in the below code*/

        onChangeText={ ValueHolder => this.GetValueFunction() }
    
      />
    
   </View>
               
       );
     }
   }

const styles = StyleSheet.create(
{
  MainContainer: {

    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 10

  },


  TextStyle: {

    textAlign: 'center',
    fontSize: 25

  }

});