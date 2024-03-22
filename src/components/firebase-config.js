// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCH0_OeBX5-rql6K-EuZebyFhXRuoGZN0o",
  authDomain: "docapp-790be.firebaseapp.com",
  projectId: "docapp-790be",
  storageBucket: "docapp-790be.appspot.com",
  messagingSenderId: "611259866154",
  appId: "1:611259866154:web:eb6486ba87f0d42d637753",
  measurementId: "G-3DGM0QX4JZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)