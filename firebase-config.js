// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyD_jpUv4SaktjNOUVuMasdfgrq9mjRVgRQ",
  authDomain: "tra-thao-moc.firebaseapp.com",
  projectId: "tra-thao-moc",
  storageBucket: "tra-thao-moc.appspot.com",
  messagingSenderId: "899447552649",
  appId: "1:899447552649:web:9d666dc3af63ac749ba458",
  measurementId: "G-E02LPD0L3Z"
};

// Khởi tạo firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
