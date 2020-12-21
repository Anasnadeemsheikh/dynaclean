import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA0ZfpgaYxpm1othn01c8gCiwfTm1R1rY4",
    authDomain: "dynaclean-87cf5.firebaseapp.com",
    databaseURL: "https://dynaclean-87cf5.firebaseio.com",
    projectId: "dynaclean-87cf5",
    storageBucket: "dynaclean-87cf5.appspot.com",
    messagingSenderId: "1034145163153",
    appId: "1:1034145163153:web:156eff318e040497655c30",
    measurementId: "G-EVK7741R5C"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase;