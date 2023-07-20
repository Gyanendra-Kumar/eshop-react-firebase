// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCTpb39WYFB6I9Ym74atRfqnmjlsp6P-10",
  authDomain: "eshop-39047.firebaseapp.com",
  projectId: "eshop-39047",
  storageBucket: "eshop-39047.appspot.com",
  messagingSenderId: "109396137251",
  appId: "1:109396137251:web:6ce9f4de796dbe09fce896",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
