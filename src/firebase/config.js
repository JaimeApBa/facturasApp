// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSJC2weRsvcpp-jAElDMlQmH68X4_vvp8",
  authDomain: "facturasapp-d8cd9.firebaseapp.com",
  projectId: "facturasapp-d8cd9",
  storageBucket: "facturasapp-d8cd9.appspot.com",
  messagingSenderId: "448419168789",
  appId: "1:448419168789:web:ffa83f69deb13b22e7c41c"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig, 'facturasApp');
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);