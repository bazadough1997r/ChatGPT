import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhbciwbfX4tj5wNIM3BGIURzMyom2Dq3A",
  authDomain: "chatgpt-157d9.firebaseapp.com",
  projectId: "chatgpt-157d9",
  storageBucket: "chatgpt-157d9.appspot.com",
  messagingSenderId: "279959761531",
  appId: "1:279959761531:web:4e8b120c9f70b5d4e128de",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
