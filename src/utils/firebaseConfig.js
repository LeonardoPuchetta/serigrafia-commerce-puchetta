// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBALPvCrnHgFnHIhQUD7Uk8tBhKXRDp0Vo",
  authDomain: "e-commerce-vivero.firebaseapp.com",
  projectId: "e-commerce-vivero",
  storageBucket: "gs://e-commerce-vivero.appspot.com",
  messagingSenderId: "553002342393",
  appId: "1:553002342393:web:04bef481ce1f4236fb4f28"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);




