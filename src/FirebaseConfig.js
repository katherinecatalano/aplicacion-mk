// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4BzkklMLZiypxKKlEleyx8y6zaRSzzjY",
  authDomain: "mkfixapii.firebaseapp.com",
  projectId: "mkfixapii",
  storageBucket: "mkfixapii.appspot.com",
  messagingSenderId: "619235234137",
  appId: "1:619235234137:web:8de2bab9f097ce0d2f7c48",
  measurementId: "G-5RPDYPDH8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app) ;
const analytics = getAnalytics(app);