// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIOsHq5k3PyirlegsBh-jqrVrVmyMolIM",
  authDomain: "netflixgpt-1a8cd.firebaseapp.com",
  projectId: "netflixgpt-1a8cd",
  storageBucket: "netflixgpt-1a8cd.appspot.com",
  messagingSenderId: "14550006818",
  appId: "1:14550006818:web:114a4803af1f22c6879e7b",
  measurementId: "G-4KN0RCS8MB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = 