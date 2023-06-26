// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1BKSK9xpRBOvroxBcSNLFEcVYJ4bNM8o",
  authDomain: "develop-blog-993c0.firebaseapp.com",
  projectId: "develop-blog-993c0",
  storageBucket: "develop-blog-993c0.appspot.com",
  messagingSenderId: "137495911120",
  appId: "1:137495911120:web:e1ff3bddd8a6bf708adcd5",
  measurementId: "G-KNSR5Q68J6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
