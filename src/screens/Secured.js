import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import colors from "../styles/color";

export default class App extends React.Component {

    aboutmePressed = ()=>{
        Actions.aboutme()
      }

  render() {
    return (
        <View style={styles.wrapper}> 
        <View style={styles.container}>
        <TouchableOpacity onPress={this.aboutmePressed}>
            <Text style={styles.aboutme}>About Me</Text>
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
    aboutme: {
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