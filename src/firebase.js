import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyAJ7i-Vo8I-nHXbmvDkyR-2mm-G8NSxkmk",
  authDomain: "react-firebase-auth-e369e.firebaseapp.com",
  projectId: "react-firebase-auth-e369e",
  storageBucket: "react-firebase-auth-e369e.appspot.com",
  messagingSenderId: "962992922256",
  appId: "1:962992922256:web:493a5c98bfaf93e10dc215"
};

const firebaseDB = firebase.initializeApp(firebaseConfig);

const db = firebaseDB.database().ref();
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { db, auth, googleAuthProvider, facebookAuthProvider };
