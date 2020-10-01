import firebase from "firebase";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAJjIxTgkoEnJFF6AH9ZfMz4CzPwLAazGM",
    authDomain: "clone-26004.firebaseapp.com",
    databaseURL: "https://clone-26004.firebaseio.com",
    projectId: "clone-26004",
    storageBucket: "clone-26004.appspot.com",
    messagingSenderId: "641570464300",
    appId: "1:641570464300:web:8e708a37d6105e94a46789",
    measurementId: "G-8EWKBC23LF"
};

firebase.initializeApp(firebaseConfig)

firebase.firestore()

export default firebase;