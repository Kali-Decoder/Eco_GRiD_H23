// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI8DsuzYW0tivZVCCxtkpF58C37KRg7_Y",
  authDomain: "eco-grid-ccb1b.firebaseapp.com",
  projectId: "eco-grid-ccb1b",
  storageBucket: "eco-grid-ccb1b.appspot.com",
  messagingSenderId: "693958056312",
  appId: "1:693958056312:web:b87f341b6b7cb69335d08d",
  measurementId: "G-VDRTXQ85VK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
