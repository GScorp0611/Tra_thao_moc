// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_jpUv4SaktjNOUVuMasdfgrq9mjRVgRQ",
  authDomain: "tra-thao-moc.firebaseapp.com",
  projectId: "tra-thao-moc",
  storageBucket: "tra-thao-moc.firebasestorage.app",
  messagingSenderId: "899447552649",
  appId: "1:899447552649:web:9d666dc3af63ac749ba458",
  measurementId: "G-E02LPD0L3Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
