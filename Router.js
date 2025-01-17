import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import LoggedOut from './src/screens/LoggedOut.js'
import Login from './src/screens/Login.js'
import Signup from './src/screens/Signup.js'
import Secured from './src/screens/Secured.js'
import Aboutme from './src/screens/Aboutme.js'
import colors from "./src/styles/color";
import Funstuff from './src/screens/Funstuff.js'
import Futuregoals from './src/screens/Futuregoals.js'
import Myclasses from './src/screens/Myclasses.js'
import Unsecured from './src/screens/Unsecured.js'


const Routes = ()=> {
    return (
        <Router>
           <Scene key="root">
                <Scene
                    key="welcome"
                    title="Welcome"
                    component={LoggedOut}
                    backButtonTextStyle = {{color:'#000000'}}
                    barButtonIconStyle={{ tintColor: '#000000' }}
                    titleStyle = {{color : '#000000'}}
                    backButtonTintColor = '#000'
                    leftButtonStyle = {{color : '#000',tintColor : '#000'}}
                    navigationBarStyle={{ backgroundColor: colors.green01,borderBottomColor:"#1e2226"}}
                    >
                </Scene>
                <Scene
                    key="login"
                    title="Login Page"
                    component={Login}
                    backButtonTextStyle = {{color:'#000000'}}
                    barButtonIconStyle={{ tintColor: '#000000' }}
                    titleStyle = {{color : '#000000'}}
                    backButtonTintColor = '#000'
                    leftButtonStyle = {{color : '#000',tintColor : '#000'}}
                    navigationBarStyle={{ backgroundColor: colors.green01,borderBottomColor:"#1e2226"}}>
                </Scene>
                <Scene
                    key="signup"
                    title="Sign Up Page"
                    component={Signup}
                    backButtonTextStyle = {{color:'#000000'}}
                    barButtonIconStyle={{ tintColor: '#000000' }}
                    titleStyle = {{color : '#000000'}}
                    backButtonTintColor = '#000'
                    leftButtonStyle = {{color : '#000',tintColor : '#000'}}
                    navigationBarStyle={{ backgroundColor: colors.green01,borderBottomColor:"#1e2226"}}>
                </Scene>
                <Scene
                    key="signedin"
                    title="Home page"
                    component={Secured}
                    backButtonTextStyle = {{color:'#000000'}}
                    barButtonIconStyle={{ tintColor: '#000000' }}
                    titleStyle = {{color : '#000000'}}
                    backButtonTintColor = '#000'
                    leftButtonStyle = {{color : '#000',tintColor : '#000'}}
                    navigationBarStyle={{ backgroundColor: colors.green01,borderBottomColor:"#1e2226"}}>
                </Scene>
                <Scene
                    key="aboutme"
                    title="About Me"
                    component={Aboutme}
                    backButtonTextStyle = {{color:'#000000'}}
                    barButtonIconStyle={{ tintColor: '#000000' }}
                    titleStyle = {{color : '#000000'}}
                    backButtonTintColor = '#000'
                    leftButtonStyle = {{color : '#000',tintColor : '#000'}}
                    navigationBarStyle={{ backgroundColor: colors.green01,borderBottomColor:"#1e2226"}}>
                </Scene>
                <Scene
                    key="funstuff"
                    title="Fun Stuff"
                    component={Funstuff}
                    backButtonTextStyle = {{color:'#000000'}}
                    barButtonIconStyle={{ tintColor: '#000000' }}
                    titleStyle = {{color : '#000000'}}
                    backButtonTintColor = '#000'
                    leftButtonStyle = {{color : '#000',tintColor : '#000'}}
                    navigationBarStyle={{ backgroundColor: colors.green01,borderBottomColor:"#1e2226"}}>
                </Scene>
                <Scene
                    key="futuregoals"
                    title="Future Goals"
                    component={Futuregoals}
                    backButtonTextStyle = {{color:'#000000'}}
                    barButtonIconStyle={{ tintColor: '#000000' }}
                    titleStyle = {{color : '#000000'}}
                    backButtonTintColor = '#000'
                    leftButtonStyle = {{color : '#000',tintColor : '#000'}}
                    navigationBarStyle={{ backgroundColor: colors.green01,borderBottomColor:"#1e2226"}}>
                </Scene>
                <Scene
                    key="myclasses"
                    title="My Classes"
                    component={Myclasses}
                    backButtonTextStyle = {{color:'#000000'}}
                    barButtonIconStyle={{ tintColor: '#000000' }}
                    titleStyle = {{color : '#000000'}}
                    backButtonTintColor = '#000'
                    leftButtonStyle = {{color : '#000',tintColor : '#000'}}
                    navigationBarStyle={{ backgroundColor: colors.green01,borderBottomColor:"#1e2226"}}>
                </Scene>
                <Scene
                    key="unsecured"
                    title="Home Page"
                    component={Myclasses}
                    backButtonTextStyle = {{color:'#000000'}}
                    barButtonIconStyle={{ tintColor: '#000000' }}
                    titleStyle = {{color : '#000000'}}
                    backButtonTintColor = '#000'
                    leftButtonStyle = {{color : '#000',tintColor : '#000'}}
                    navigationBarStyle={{ backgroundColor: colors.green01,borderBottomColor:"#1e2226"}}>
                </Scene>
           </Scene>
        </Router>
    )
}



export default Routes