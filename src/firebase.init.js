// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1jYCTA7D_rghqn_Z0CG2nbKj1AHrgJ84",
  authDomain: "ema-john-simple-7aa24.firebaseapp.com",
  projectId: "ema-john-simple-7aa24",
  storageBucket: "ema-john-simple-7aa24.appspot.com",
  messagingSenderId: "1042022887294",
  appId: "1:1042022887294:web:d96f81fc2be56a118f4d2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;