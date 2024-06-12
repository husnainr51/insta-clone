// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "reactchat-1c630.firebaseapp.com",
  projectId: "reactchat-1c630",
  storageBucket: "reactchat-1c630.appspot.com",
  messagingSenderId: "122496871379",
  appId: "1:122496871379:web:e2f1aa69df9ed83fa1dd26",
  measurementId: "G-HNX4W2K617",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
