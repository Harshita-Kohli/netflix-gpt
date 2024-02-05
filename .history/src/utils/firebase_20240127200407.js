// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu-J5vfvWxX3xL0fUZ6KGWDOvQMwovnp8",
  authDomain: "netflix-gpt-9e26f.firebaseapp.com",
  projectId: "netflix-gpt-9e26f",
  storageBucket: "netflix-gpt-9e26f.appspot.com",
  messagingSenderId: "110465900111",
  appId: "1:110465900111:web:c9f50e6d205330aea1543a",
  measurementId: "G-2FFGNDQH9B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();