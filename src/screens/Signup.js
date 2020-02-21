
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
            <Text style={styles.signup}>Sign Up</Text>
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
    signup: {
        backgroundColor: colors.green01,
        color: 'white',
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
})