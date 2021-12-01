import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const apiKey = "AIzaSyB3Nq15ShYhqhyfwoPzt-xalpzWjOxtlaU";

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "fakeinsta-29b6b.firebaseapp.com",
  projectId: "fakeinsta-29b6b",
  storageBucket: "fakeinsta-29b6b.appspot.com",
  messagingSenderId: "516642740352",
  appId: "1:516642740352:web:43da819bc3ef4b5a68ee65",
  measurementId: "G-QH34KHFLMK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export{auth};
