import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZbT7YDjw70EHX20Wtv7SFUPZ3T8pYpWo",
  authDomain: "adega-d0602.firebaseapp.com",
  projectId: "adega-d0602",
  storageBucket: "adega-d0602.firebasestorage.app",
  messagingSenderId: "328144285251",
  appId: "1:328144285251:web:17a76b83c0dc8d5614aef6",
};
// Garante que o app Firebase não seja inicializado mais de uma vez
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { app, db };
