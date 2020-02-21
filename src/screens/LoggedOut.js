
import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import colors from "../styles/color";
export default class LoggedOut extends Component {
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
          <Button style={styles.welcomesubText}
            title='Login'
            color='black'
          />
          <Text style={styles.welcomesubText}>
            Sign Up
          </Text>
          <Text style={styles.welcomesubText}>
            No thanks, take me anonymously
          </Text>
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
    },
    welcomesubText: {
        fontSize: 25,
        color: colors.black,
        fontWeight: "300",
        marginBottom: 40,
        textAlign: 'center',
      }
  });