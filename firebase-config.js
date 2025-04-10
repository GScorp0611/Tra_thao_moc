// Thay config của bạn vào đây
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyD_jpUv4SaktjNOUVuMasdfgrq9mjRVgRQ",
  authDomain: "tra-thao-moc.firebaseapp.com",
  databaseURL: "https://tra-thao-moc-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "tra-thao-moc",
  storageBucket: "tra-thao-moc.firebasestorage.app",
  messagingSenderId: "899447552649",
  appId: "1:899447552649:web:9d666dc3af63ac749ba458"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
