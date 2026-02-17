import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "famory-20f00.firebaseapp.com",
  projectId: "famory-20f00",
  storageBucket: "famory-20f00.firebasestorage.app",
  messagingSenderId: "27659347397",
  appId: "1:27659347397:web:6cfb027e036488e276d7ac",
  measurementId: "G-10S8T0H0SM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app); // 👈 EXPORT DATABASE

// Providers
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
