import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBHhcqlMIo9MDJI2kbWcXZjjgnbjMJwbIU",
    authDomain: "covid-report-a07ee.firebaseapp.com",
    projectId: "covid-report-a07ee",
    storageBucket: "covid-report-a07ee.appspot.com",
    messagingSenderId: "615808658767",
    appId: "1:615808658767:web:06e3ea78b6e7b7e9db693a"
}

firebase.initializeApp(config)

export default firebase

