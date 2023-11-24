

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqVuJZgjaUSFLtbX09Rwc8MuP4ncUoNbg",
    authDomain: "photofolio-80b5f.firebaseapp.com",
    projectId: "photofolio-80b5f",
    storageBucket: "photofolio-80b5f.appspot.com",
    messagingSenderId: "193025811862",
    appId: "1:193025811862:web:d2e36fee1ff54d686829b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  db = getFirestore(app);
export  default  db;