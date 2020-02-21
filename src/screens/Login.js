import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import colors from "../styles/color";
import Firebase from '../config'

export default class App extends React.Component {

    loginPressed = ()=>{
        Actions.signedin()
      }

    handleLogin = () => {
        const { email, password } = this.state

        Firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('aboutme'))
            .catch(error => console.log(error))
    }

    state = {
        email: '',
        password: ''
    }
  render() {
    return (
        <View style={styles.wrapper}> 
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
                <TouchableOpacity onPress={this.handleLogin}>
                    <Text style={styles.button}>Login</Text>
                </TouchableOpacity>
            </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        display: "flex",
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '85%',
        margin: 10,
        padding: 15,
        fontSize: 20,
        borderColor: '#d3d3d3',
        borderBottomWidth: 1,
        textAlign: 'center'
        },
    button: {
        backgroundColor: colors.green01,
        color: 'white',
        width: 200,
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