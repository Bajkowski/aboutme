
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
            Welcome to About Me!
          </Text>
          <Text style={styles.welcomesubText}>
            Please log in, sign up, or continue in anonymous mode:
          </Text>
          <TouchableOpacity onPress={this.signupPressed}>
            <Text style={styles.signup}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.loginPressed}>
            <Text style={styles.login}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.anonPressed}>
            <Text style={styles.anon}>Skip For Now...</Text>
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
      backgroundColor: colors.green01 
    },
    welcomeWrapper: {
      flex: 1,
      display: "flex",
      marginTop: 30,
      padding: 20
    },
    welcomeText: {
      fontSize: 30,
      color: colors.white,
      fontWeight: "300",
      marginBottom: 40,
      textAlign: 'center',
      marginTop: '25%',
    },
    welcomesubText: {
        fontSize: 25,
        color: colors.black,
        fontWeight: "300",
        marginBottom: 40,
        textAlign: 'center',
      },
      signup: {
        backgroundColor: 'white',
        color: '#3A59FF',
        width: "75%",
        borderRadius: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        //marginLeft: '18%',
        padding: "2%",
        fontSize:  27,
        marginTop: '50%',
        alignSelf: 'center',
      },
      login: {
        backgroundColor: '#3A59FF',
        color: 'white',
        width: "75%",
        borderRadius: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        //marginLeft: '11%',
        padding: "2%",
        fontSize:  27,
        marginTop: '10%',
        alignSelf: 'center',
      },
      anon: {
        backgroundColor: '#3A59FF',
        color: 'white',
        width: "75%",
        borderRadius: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        //marginLeft: '11%',
        padding: "2%",
        fontSize:  27,
        marginTop: '10%',
        alignSelf: 'center',
      }
  });