import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import colors from "../styles/color";

export default class App extends React.Component {

    aboutmePressed = ()=>{
        Actions.aboutme()
      }
    funstuffPressed = ()=>{
        Actions.funstuff()
      }
    futuregoalsPressed = ()=>{
        Actions.futuregoals()
      }
    myclassesPressed = ()=>{
        Actions.myclasses()
      }

  render() {
    return (
        <View style={styles.wrapper}> 
        <View style={styles.container}>
        <TouchableOpacity onPress={this.aboutmePressed}>
            <Text style={styles.aboutme}>About Me</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.funstuffPressed}>
            <Text style={styles.aboutme}>Fun Stuff</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.futuregoalsPressed}>
            <Text style={styles.aboutme}>Future Goals</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.myclassesPressed}>
            <Text style={styles.aboutme}>My Classes</Text>
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
        width: 200,
        borderRadius: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        //marginLeft: '18%',
        padding: "2%",
        fontSize:  27,
        marginTop: 30,
        alignSelf: 'center',

      },
})