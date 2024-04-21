// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoU3WNHjoKfdO1Ae0KuWP3Un6NQZgWewE",
  authDomain: "netflixgpt-c4491.firebaseapp.com",
  projectId: "netflixgpt-c4491",
  storageBucket: "netflixgpt-c4491.appspot.com",
  messagingSenderId: "595510921462",
  appId: "1:595510921462:web:e511a76f43fe2e7f3f44d7",
  measurementId: "G-FYL87ZM8FT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth()