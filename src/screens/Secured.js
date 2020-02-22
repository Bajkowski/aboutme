import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import colors from "../styles/color";
import { connect } from 'react-redux'
import Firebase from '../config'

class Secured extends React.Component {

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
    handleSignout = () => {
        Firebase.auth().signOut()
        this.props.navigation.navigate('welcome')
    }

  render() {
    return (
        <View style={styles.wrapper}> 
        <View style={styles.container}>
        <Text style={styles.input}>Click Around to Explore</Text>
        <TouchableOpacity onPress={this.aboutmePressed}>
            <Text style={styles.button}>About Me</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.funstuffPressed}>
            <Text style={styles.button}>Fun Stuff</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.futuregoalsPressed}>
            <Text style={styles.button}>Future Goals</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.myclassesPressed}>
            <Text style={styles.button}>My Classes</Text>
        </TouchableOpacity>
        <View style={styles.logout}>
                <Button title='Logout' onPress={this.handleSignout} />
            </View>
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
        marginTop: 20,
        marginBottom: 40,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize:  27,
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
        marginTop: 35,
        alignSelf: 'center',
      },
      button: {
        backgroundColor: colors.green01,
        borderColor: colors.green01,
        color: 'white',
        width: "75%",
        borderWidth: 1,
        borderRadius: 5,
        width: 250,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: "2%",
        fontSize:  27,
        marginTop: 40,
        alignSelf: 'center',
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 2, width: 2 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android
      },
    logout: {
        marginTop: 250,
    }
})

// styles are as before

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Secured)