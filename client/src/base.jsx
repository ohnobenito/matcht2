import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDtdfS4FkOa-b16mZmmDCYnFBgZGPNhdSk",
  authDomain: "matcht-22c4b.firebaseapp.com",
  databaseURL: "https://matcht-22c4b.firebaseio.com",
  projectId: "matcht-22c4b",
  storageBucket: "matcht-22c4b.appspot.com",
  messagingSenderId: "1088275446693"
});

export default app;
