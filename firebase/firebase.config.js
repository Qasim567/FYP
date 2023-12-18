// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2Yr2TYPkFYQ2luFpsbd2jfCEw8KkN0X0",
  authDomain: "final-year-project-33695.firebaseapp.com",
  projectId: "final-year-project-33695",
  storageBucket: "final-year-project-33695.appspot.com",
  messagingSenderId: "166491535750",
  appId: "1:166491535750:web:e47ba25edb86780de0d407"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);