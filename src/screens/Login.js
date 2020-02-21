import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import colors from "../styles/color";

export default class App extends React.Component {

    loginPressed = ()=>{
        Actions.signedin()
      }
  render() {
    return (
        <View style={styles.wrapper}> 
        <View style={styles.container}>
                <TextInput placeholder="Enter Username" style={styles.input}/>
                <TextInput placeholder="Enter Password" style={styles.input}/>
                <TouchableOpacity onPress={this.loginPressed}>
                    <Text style={styles.button}>Login</Text>
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
    container: {
        padding: 10,
    },
    input: {
        marginTop: '25%',
        margin: 5
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