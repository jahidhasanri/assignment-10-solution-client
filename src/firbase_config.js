// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcjwl_YjD9_icR1fD4D0pIb142rOMBWJg",
  authDomain: "assignment-10-solution.firebaseapp.com",
  projectId: "assignment-10-solution",
  storageBucket: "assignment-10-solution.firebasestorage.app",
  messagingSenderId: "736559239768",
  appId: "1:736559239768:web:d6be0af1d1c861a9bab02d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth