// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUoDZ4cOQTaJegSSJaYbO3kX4YPtuxM-c",
  authDomain: "futurama-bc834.firebaseapp.com",
  projectId: "futurama-bc834",
  storageBucket: "futurama-bc834.appspot.com",
  messagingSenderId: "674429490074",
  appId: "1:674429490074:web:3ffda0a066e6d5e408a023"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);