
import firebase from 'firebase'
import {
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    MESSAGE_SENDER_ID,
    APP_ID
} from 'react-native-dotenv'

const firebaseConfig = {
    apiKey: "AIzaSyCtNSpyMH2NBqeVFK6mu8XneBjf4Cyrpjk",
    authDomain: "aboutme-77a11.firebaseapp.com",
    databaseURL: "https://aboutme-77a11.firebaseio.com",
    projectId: "aboutme-77a11",
    storageBucket: "aboutme-77a11.appspot.com",
    messagingSenderId: "128830651699",
    appId: "1:128830651699:web:68d78e7edd8082b3549246",
    measurementId: "G-Z45QWNCB5E"
}

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase