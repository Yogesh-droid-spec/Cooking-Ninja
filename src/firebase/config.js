import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAu0AewGV4ReXRNgucxzfeIkEf0LkOMHT0",
    authDomain: "cooking-ninja-site-ece98.firebaseapp.com",
    projectId: "cooking-ninja-site-ece98",
    storageBucket: "cooking-ninja-site-ece98.appspot.com",
    messagingSenderId: "539551314382",
    appId: "1:539551314382:web:c54401034cbda4d2cc7b9f"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init services
  const projectFirestore = firebase.firestore()

  export {projectFirestore}