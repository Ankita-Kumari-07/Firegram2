  import * as firebase from 'firebase/admin';
  import 'firebase/storage';
  import 'firebase/firestore';

  
  // Your web app's Firebase configuration

  var firebaseConfig = {
    apiKey: "AIzaSyC9miw4t9aER660Wk45PiNq0vMp-a2MAUM",
    authDomain: "firegram-ankita.firebaseapp.com",
    projectId: "firegram-ankita",
    storageBucket: "firegram-ankita.appspot.com",
    messagingSenderId: "1072398985158",
    appId: "1:1072398985158:web:2e8c9401906e980c6cf4c7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();


  export{projectStorage,projectFirestore};