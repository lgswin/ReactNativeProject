// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getReactNativePersistence, initializeAuth} from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getFirestore, collection} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE7Rlba1oNheT8ah7fdlBmQbjn6r6MDJM",
  authDomain: "fir-chat-a1393.firebaseapp.com",
  projectId: "fir-chat-a1393",
  storageBucket: "fir-chat-a1393.appspot.com",
  messagingSenderId: "33741362458",
  appId: "1:33741362458:web:6aee65249c2999f75448a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);
export const usersRef = collection(db, 'users');
export const roomRef = collection(db, 'rooms');