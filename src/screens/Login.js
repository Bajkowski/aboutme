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
                    <Text style={styles.login}>Login</Text>
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
    container: {
        padding: 10,
    },
    input: {
        marginTop: '25%',
        margin: 5
    },
    login: {
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
})