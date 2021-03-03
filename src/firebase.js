import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDW8NyfMgHBXlPevJpI48ujKNm1_SPBPt4",
    authDomain: "ecommerce-ee00d.firebaseapp.com",
    databaseURL: "https://ecommerce-ee00d-default-rtdb.firebaseio.com",
    projectId: "ecommerce-ee00d",
    storageBucket: "ecommerce-ee00d.appspot.com",
    messagingSenderId: "607990809679",
    appId: "1:607990809679:web:3b7fe345a977efc865d63a",
    measurementId: "G-4JBFFHWG94"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth()

  export const db = firebase.firestore()

export default firebase;