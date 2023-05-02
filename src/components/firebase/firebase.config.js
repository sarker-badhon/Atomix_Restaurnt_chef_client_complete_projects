// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsBmcB3b-OsxgOn7-cNQX-Pm7FEDQMIDg",
  authDomain: "atomix-restaruant-chef.firebaseapp.com",
  projectId: "atomix-restaruant-chef",
  storageBucket: "atomix-restaruant-chef.appspot.com",
  messagingSenderId: "922934231973",
  appId: "1:922934231973:web:bf491d9f92e0a008129e4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;