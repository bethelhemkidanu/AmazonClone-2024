import firebase from "firebase/compat/app";
// auth
import {getAuth} from 'firebase/auth'
import "firebase/compat/firestore"
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhHgRuhzy0_POQZKhUB0KTPGWmce9qD3M",
  authDomain: "clone-d33c0.firebaseapp.com",
  projectId: "clone-d33c0",
  storageBucket: "clone-d33c0.appspot.com",
  messagingSenderId: "827931597518",
  appId: "1:827931597518:web:514c0d1cf12ce7fb830e9f",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();