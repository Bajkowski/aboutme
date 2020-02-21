
import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

export default class App extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Enter Email Address"/>
        <TextInput secureTextEntry={true} style={styles.input} placeholder="Enter Password"/>
        <TextInput secureTextEntry={true} style={styles.input} placeholder="Re-Enter Password"/>
        <View style={styles.input}>
        <Button 
          title="Login"
        />
        </View>
        <View style={styles.input}>
        <Button 
          title="SignUp"
        />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    marginTop: 10,
    marginBottom: 10
    },
})