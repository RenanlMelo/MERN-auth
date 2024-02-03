import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-7d40c.firebaseapp.com",
  projectId: "mern-auth-7d40c",
  storageBucket: "mern-auth-7d40c.appspot.com",
  messagingSenderId: "697531628779",
  appId: "1:697531628779:web:4c853e9d3f702aaf7452ae",
  storageRules: "storage.rules", // add this line
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const storage = getStorage(app);

export { app, auth, storage };