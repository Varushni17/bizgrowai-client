// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey:  "AIzaSyAGHCzChErb7Fzp5OOKcXnBQHoKZoWr73k",
  authDomain: "bizgrowai-a2cb1.firebaseapp.com",
  projectId: "bizgrowai-a2cb1",
  storageBucket: "bizgrowai-a2cb1.firebasestorage.app",
  messagingSenderId: "273550484635",
  appId: "1:273550484635:web:8a988482f3eae6f177523e",
  measurementId: "G-PM4817H6EV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
