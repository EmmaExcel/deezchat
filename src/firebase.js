
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDZA0y94HlIXIhDxc1wZbB5rYfL73t0Dyg",
  authDomain: "deezchat-249db.firebaseapp.com",
  projectId: "deezchat-249db",
  storageBucket: "deezchat-249db.appspot.com",
  messagingSenderId: "687802336680",
  appId: "1:687802336680:web:3e62680a167f8df5bac99d",
  measurementId: "G-8NFMHJ4NQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()