
import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import {TouchableOpacity} from 'react-native';
import {Alert} from 'react-native';
import colors from "../styles/color";
import { Actions } from 'react-native-router-flux';
export default class LoggedOut extends Component {

  signupPressed = ()=>{
    Actions.signup()
  }

  loginPressed = ()=> {
    Actions.login()
  }

  anonPressed = ()=> {
    Alert.alert("Entering Anonymous Mode!")
  }

  render() {
    return (
      <View style={styles.wrapper}> 
        <View style={styles.welcomeWrapper}>
          <Text style={styles.welcomeText}>
            All About Me
          </Text>
          <TouchableOpacity onPress={this.signupPressed}>
            <Text style={styles.button}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.loginPressed}>
            <Text style={styles.button}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.anonPressed}>
            <Text style={styles.anon}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      display: "flex",
      backgroundColor: 'white' 
    },
    welcomeWrapper: {
      flex: 1,
      display: "flex",
      marginTop: 30,
      padding: 20
    },
    welcomeText: {
      fontSize: 55,
      color: colors.green,
      fontWeight: "300",
      fontWeight: 'bold',
      marginBottom: 160,
      textAlign: 'center',
      marginTop: 100,
      shadowColor: colors.green01, // IOS
      shadowOffset: { height: 2, width: 2 }, // IOS
      shadowOpacity: 1, // IOS
      shadowRadius: 1, //IOS
      elevation: 2, // Android
    },
    welcomesubText: {
        fontSize: 25,
        color: colors.black,
        fontWeight: "300",
        marginBottom: 40,
        textAlign: 'center',
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
      anon: {
        backgroundColor: 'black',
        color: 'white',
        width: "50%",
        borderRadius: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: "1%",
        fontSize:  20,
        marginTop: '10%',
        alignSelf: 'center',
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 2, width: 2 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android
      }
  });