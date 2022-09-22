// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBALPvCrnHgFnHIhQUD7Uk8tBhKXRDp0Vo",
  authDomain: "e-commerce-vivero.firebaseapp.com",
  projectId: "e-commerce-vivero",
  storageBucket: "e-commerce-vivero.appspot.com",
  messagingSenderId: "553002342393",
  appId: "1:553002342393:web:04bef481ce1f4236fb4f28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)