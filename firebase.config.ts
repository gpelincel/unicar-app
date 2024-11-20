// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlKmzYN0dwiYCskhEfSZCzf45-sGSiHp0",
  authDomain: "unicar-4041f.firebaseapp.com",
  projectId: "unicar-4041f",
  storageBucket: "unicar-4041f.firebasestorage.app",
  messagingSenderId: "433533867773",
  appId: "1:433533867773:web:e488141ac400efcc601094"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app};