


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYHjxOK1PMAyZ-3qXZDo2nxQ9ZTad2m44",
  authDomain: "blogs-d4d97.firebaseapp.com",
  projectId: "blogs-d4d97",
  storageBucket: "blogs-d4d97.appspot.com",
  messagingSenderId: "343760694081",
  appId: "1:343760694081:web:635475d9343fbcecc88fc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);