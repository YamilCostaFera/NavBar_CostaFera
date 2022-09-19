// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBHH1He6oyiAMx2EYcx0X9rwe8TA9ciUDA",
  authDomain: "ecommerce-coder-6fca4.firebaseapp.com",
  projectId: "ecommerce-coder-6fca4",
  storageBucket: "ecommerce-coder-6fca4.appspot.com",
  messagingSenderId: "520121117779",
  appId: "1:520121117779:web:a9a2f52ab4037e6fc2eaa6"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

