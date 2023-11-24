import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyB0ihETASpGMekIugz70QBPLHR4mBa45go",
    authDomain: "busybuy-2020f.firebaseapp.com",
    projectId: "busybuy-2020f",
    storageBucket: "busybuy-2020f.appspot.com",
    messagingSenderId: "906697217000",
    appId: "1:906697217000:web:9c097e6283c0743f5e4a5d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;