// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b403a.firebaseapp.com",
  projectId: "mern-estate-b403a",
  storageBucket: "mern-estate-b403a.firebasestorage.app",
  messagingSenderId: "724160712355",
  appId: "1:724160712355:web:203fc42331e2e27a7fb916"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);