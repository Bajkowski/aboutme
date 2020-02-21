
import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import colors from "../styles/color";

export default class App extends React.Component{
    
    signupPressed = ()=>{
        Actions.signedin()
      }

  render(){
    return (
    <View style={styles.wrapper}> 
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Enter Email Address"/>
        <TextInput secureTextEntry={true} style={styles.input} placeholder="Enter Password"/>
        <TextInput secureTextEntry={true} style={styles.input} placeholder="Re-Enter Password"/>
        <View style={styles.input}>
        </View>
        <View style={styles.input}>
        <TouchableOpacity onPress={this.signupPressed}>
            <Text style={styles.button}>Sign Up</Text>
        </TouchableOpacity>
        </View>
      </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        display: "flex",
        backgroundColor: 'white' 
    },
    container: {
        padding: 20
    },
    input: {
        marginTop: 10,
        marginBottom: 10
        },
    button: {
            backgroundColor: colors.green01,
            color: 'white',
            width: "75%",
            borderRadius: 25,
            textAlign: 'center',
            fontWeight: 'bold',
            padding: "2%",
            fontSize:  27,
            marginTop: '10%',
            alignSelf: 'center',
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 2, width: 2 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            elevation: 2, // Android
    },
})