// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

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
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth(app)
export default app;

