// Import the functions you need from the SDKs you need
import firebase from "firebase";

const firebaseConfig= {
  apiKey: "AIzaSyCXi8VEsPucMW-fGSDIuFoSzVlo0Q931xM",
  authDomain: "own-6c967.firebaseapp.com",
  databaseURL: "https://own-6c967-default-rtdb.firebaseio.com",
  projectId: "own-6c967",
  storageBucket: "own-6c967.appspot.com",
  messagingSenderId: "613586082002",
  appId: "1:613586082002:web:2343d5d166d23e68f8750b"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();