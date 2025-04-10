// Thay config của bạn vào đây
const firebaseConfig = {
  apiKey: "AIzaSyD_jpUv4SaktjNOUVuMasdfgrq9mjRVgRQ",
  authDomain: "tra-thao-moc.firebaseapp.com",
  databaseURL: "https://tra-thao-moc-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "tra-thao-moc",
  storageBucket: "tra-thao-moc.firebasestorage.app",
  messagingSenderId: "899447552649",
  appId: "1:899447552649:web:9d666dc3af63ac749ba458"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
