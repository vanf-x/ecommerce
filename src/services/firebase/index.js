// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK2xIVbHkpXMr3cLa8cDx1y9YTA_lqzTs",
  authDomain: "ecommercecoder-592cb.firebaseapp.com",
  projectId: "ecommercecoder-592cb",
  storageBucket: "ecommercecoder-592cb.appspot.com",
  messagingSenderId: "1038484643753",
  appId: "1:1038484643753:web:93258f5ac98d4dd23feeb8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);