import {initializeApp}  from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDN6hsBnI9Ed3a-a1aR9b1iLO6GynpfgSs",
    authDomain: "playlist-app-7314f.firebaseapp.com",
    projectId: "playlist-app-7314f",
    storageBucket: "playlist-app-7314f.appspot.com",
    messagingSenderId: "512574930117",
    appId: "1:512574930117:web:79ed49352b60b4eeefc4ac"
  };

  const app = initializeApp(firebaseConfig);
  // const projectFirestore = firebase.firestore();
  // const projectAuth = firebase.auth();
  // const timestamp = firebase.firestore.fieldValue.serverTimestamp;

  export {app};