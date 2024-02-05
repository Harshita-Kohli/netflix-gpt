// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4lyXL7-qB5sCeD4UBt6CB7Jh5DSHMwhk",
  authDomain: "netflixgpt-305e2.firebaseapp.com",
  projectId: "netflixgpt-305e2",
  storageBucket: "netflixgpt-305e2.appspot.com",
  messagingSenderId: "151852500178",
  appId: "1:151852500178:web:8bbed311e3a2fb3416990b",
  measurementId: "G-MN1GPPHQQ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//we keep auth in the central place to be used again and again
export const auth = getAuth();