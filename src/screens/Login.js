import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import colors from "../styles/color";
import Firebase from '../config'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, login, getUser } from '../actions/user'

class Login extends React.Component {
    // add this lifecycle method
    componentDidMount = () => {
        Firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.getUser(user.uid)
                if (this.props.user != null) {
                    this.props.navigation.navigate('signedin')
                }
            }
        })
    }
  render() {
    return (
        <View style={styles.wrapper}> 
                <TextInput
                    style={styles.input}
                    value={this.props.user.email}
                    onChangeText={email => this.props.updateEmail(email)}
                    placeholder='Email'
                    autoCapitalize='none'
                />
                <TextInput
                    style={styles.input}
                    value={this.props.user.password}
                    onChangeText={password => this.props.updatePassword(password)}
                    placeholder='Password'
                    secureTextEntry={true}
                />
                <TouchableOpacity onPress={() => this.props.login()}>
                    <Text style={styles.button}>Login</Text>
                </TouchableOpacity>
                <Button
                    title="Don't have an account yet? Sign up"
                    onPress={() => this.props.navigation.navigate('signup')}
                />
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
        //justifyContent: 'center',
        marginTop: 200,
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
        marginBottom: 23,
        alignSelf: 'center',
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 2, width: 2 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android
      },
})

// don't forget to bind getUser

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ updateEmail, updatePassword, login, getUser }, dispatch)
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)