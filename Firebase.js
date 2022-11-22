// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyD4BzkklMLZiypxKKlEleyx8y6zaRSzzjY",
  authDomain: "mkfixapii.firebaseapp.com",
  databaseURL: "https://mkfixapii-default-rtdb.firebaseio.com",
  projectId: "mkfixapii",
  storageBucket: "mkfixapii.appspot.com",
  messagingSenderId: "619235234137",
  appId: "1:619235234137:web:c5d965f1d1098b042f7c48",
  measurementId: "G-ES8MTWFQBR"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };