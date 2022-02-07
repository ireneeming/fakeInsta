import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

export const apiKey = "AIzaSyB3Nq15ShYhqhyfwoPzt-xalpzWjOxtlaU";

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "*",
  projectId: "*",
  storageBucket: "*",
  messagingSenderId: "*",
  appId: "*",
  measurementId: "*"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export{auth, firestore, storage};
