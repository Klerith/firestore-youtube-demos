import firebase from 'firebase/app';
import 'firebase/firestore';

throw new Error('Configuren su cadena de conexión a Firebase');

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase.firestore();
