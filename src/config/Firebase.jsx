import * as firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDmNk3MuMw09s4SbEJ5WUQRD_0WtSMrXcg",
    authDomain: "merkaz-hachomer.firebaseapp.com",
    databaseURL: "https://merkaz-hachomer.firebaseio.com",
    projectId: "merkaz-hachomer",
    storageBucket: "merkaz-hachomer.appspot.com",
    messagingSenderId: "619199947577",
    appId: "1:619199947577:web:c15ea5a7226185650efee8",
    measurementId: "G-RW3CCW6QV7"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;