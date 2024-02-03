// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-7d40c.firebaseapp.com",
  projectId: "mern-auth-7d40c",
  storageBucket: "mern-auth-7d40c.appspot.com",
  messagingSenderId: "697531628779",
  appId: "1:697531628779:web:4c853e9d3f702aaf7452ae"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);