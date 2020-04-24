import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDW_fP9ieYCCBRtm62kRJsnUa_IvGCu2S4",
    authDomain: "sql-demos.firebaseapp.com",
    databaseURL: "https://sql-demos.firebaseio.com",
    projectId: "sql-demos",
    storageBucket: "sql-demos.appspot.com",
    messagingSenderId: "460621037254",
    appId: "1:460621037254:web:676a89808ba64b96e221c7",
    measurementId: "G-MKJBQWHQEP"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase.firestore();
