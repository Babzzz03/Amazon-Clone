import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDksLS1kycIGnnWipidoG7FMDZ7AMJyzmQ",
  authDomain: "challenge-9b5aa.firebaseapp.com",
  projectId: "challenge-9b5aa",
  storageBucket: "challenge-9b5aa.appspot.com",
  messagingSenderId: "70221273049",
  appId: "1:70221273049:web:f79bb156974ca2d50eebc8",
  measurementId: "G-4QQKV7C2JG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
