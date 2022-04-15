import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCShDhqDmQ-npPyxxjiEWEUj3_E-6tWTZA",
  authDomain: "clone-25283.firebaseapp.com",
  projectId: "clone-25283",
  storageBucket: "clone-25283.appspot.com",
  messagingSenderId: "237460869476",
  appId: "1:237460869476:web:e74ab07849215ad6fb2a71",
  measurementId: "G-4JZ7GTZYRE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };