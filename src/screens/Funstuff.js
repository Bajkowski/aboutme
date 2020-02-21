import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import colors from "../styles/color";

export default class App extends React.Component{
    
    homePressed = ()=>{
        Actions.signedin()
      }

  render(){
    return (
    <View style={styles.wrapper}> 
      <View style={styles.container}>
      <Text style={styles.signup}>About Me</Text>
        <TouchableOpacity onPress={this.homePressed}>
            <Text style={styles.signup}>Home</Text>
        </TouchableOpacity>
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