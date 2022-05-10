import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDwAJU1Cyv-ajmfehE040VrRrTaIYbe384",
    authDomain: "pro71-694d3.firebaseapp.com",
    projectId: "pro71-694d3",
    storageBucket: "pro71-694d3.appspot.com",
    messagingSenderId: "171451229918",
    appId: "1:171451229918:web:8f280f3b97ffdc3498444f"
  };
  
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
