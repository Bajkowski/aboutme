import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import LoggedOut from './src/screens/LoggedOut.js'
import Login from './src/screens/Login.js'
import Signup from './src/screens/Signup.js'


const Routes = ()=> {
    return (
        <Router>
           <Scene key="root">
                <Scene
                    key="home"
                    title="Home Page"
                    component={LoggedOut}
                    >
                </Scene>
                <Scene
                    key="login"
                    title="Login Page"
                    component={Login}>
                </Scene>
                <Scene
                    key="signup"
                    title="Sign Up Page"
                    component={Signup}>
                </Scene>
           </Scene>
        </Router>
    )
}

export default Routes