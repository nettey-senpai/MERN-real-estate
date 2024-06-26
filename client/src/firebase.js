// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-4f09d.firebaseapp.com",
  projectId: "mern-real-estate-4f09d",
  storageBucket: "mern-real-estate-4f09d.appspot.com",
  messagingSenderId: "603622520896",
  appId: "1:603622520896:web:607af45d2fa0e4236487a5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
