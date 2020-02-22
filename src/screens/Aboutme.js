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
      <Text style={styles.welcomeText}>About Me</Text>
      <TextInput style = {styles.input}
        placeholder = "Click to tell us about yourself!"
            />
        <TouchableOpacity onPress={this.homePressed}>
            <Text style={styles.signup}>Home</Text>
        </TouchableOpacity>
        </View>
      </View>
    )
  }
}

  const onChange = textValue => setText(textValue);
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
        marginBottom: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize:  27,
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
        marginTop: '75%',
        alignSelf: 'center',
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
    })