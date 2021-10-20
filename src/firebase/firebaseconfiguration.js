import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWFwMWa0zZf2cw30p6e0dv_EhzuqEFTWc",
  authDomain: "fir-authlabweb-6f65b.firebaseapp.com",
  projectId: "fir-authlabweb-6f65b",
  storageBucket: "fir-authlabweb-6f65b.appspot.com",
  messagingSenderId: "423592620220",
  appId: "1:423592620220:web:8d18f792ebe8aa0d1be0b9",
};

let instance;

export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (instance) return instance;
    instance = firebase.initializeApp(firebaseConfig);
    return instance;
  }
  return null;
}
