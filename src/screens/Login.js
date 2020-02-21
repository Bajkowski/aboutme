import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import colors from "../styles/color";

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.wrapper}> 
        <View style={styles.container}>
                <TextInput placeholder="Enter Username" style={styles.input}/>
                <TextInput placeholder="Enter Password" style={styles.input}/>
                <Button title="Hello"></Button>
                <Button onPress={()=>this.navigate()} title="Loginn"></Button>
            </View>
            </View>
    );
  }
  navigate(){
    Actions.home()
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
    }
})