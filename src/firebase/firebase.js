// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcEDAfRg9v0n-WblUXmnD1y5xH9U94NYo",
  authDomain: "dragon-news-9cb81.firebaseapp.com",
  projectId: "dragon-news-9cb81",
  storageBucket: "dragon-news-9cb81.firebasestorage.app",
  messagingSenderId: "708839392001",
  appId: "1:708839392001:web:2df069323de12ee8739100"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);