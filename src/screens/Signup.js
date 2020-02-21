
import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import colors from "../styles/color";
import Firebase from '../config'

export default class App extends React.Component{
    
    signupPressed = ()=>{
        Actions.signedin()
      }
    handleSignUp = () => {
        const { email, password } = this.state
        Firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('signedin'))
            .catch(error => console.log(error))
    }
    state = {
        name: '',
        email: '',
        password: ''
    }

  render(){
    return (
    <View style={styles.wrapper}> 
      <View style={styles.container}>
        <TextInput
                    style={styles.input}
                    value={this.state.name}
                    onChangeText={name => this.setState({ name })}
                    placeholder='Full Name'
                />
                <TextInput
                    style={styles.input}
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    placeholder='Email'
                    autoCapitalize='none'
                />
                <TextInput
                    style={styles.input}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    placeholder='Password'
                    secureTextEntry={true}
                />
        <View style={styles.input}>
        </View>
        <View style={styles.input}>
        <TouchableOpacity onPress={this.handleSignUp}>
            <Text style={styles.button}>Sign Up</Text>
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
        width: '85%',
        margin: 10,
        padding: 15,
        fontSize: 16,
        borderColor: '#d3d3d3',
        borderBottomWidth: 1,
        textAlign: 'center'
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
            marginTop: 30,
            marginBottom: 20,
            paddingVertical: 5,
            alignSelf: 'center',
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 2, width: 2 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            elevation: 2, // Android
    },
})