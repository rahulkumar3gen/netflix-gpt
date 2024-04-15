// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmLH1ZyZwxpS1EUL0ceXuSUXt-tT1i9eU",
  authDomain: "netflixgpt-b6d2e.firebaseapp.com",
  projectId: "netflixgpt-b6d2e",
  storageBucket: "netflixgpt-b6d2e.appspot.com",
  messagingSenderId: "1048333018676",
  appId: "1:1048333018676:web:74221b94d4b9e516760c61",
  measurementId: "G-5M00W35B1Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
