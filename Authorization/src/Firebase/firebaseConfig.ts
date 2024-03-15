// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2GcYVpXJPRBecLKRrr9DuAQkTTRnc5i0",
  authDomain: "reactauthorizationapp.firebaseapp.com",
  projectId: "reactauthorizationapp",
  storageBucket: "reactauthorizationapp.appspot.com",
  messagingSenderId: "147084466267",
  appId: "1:147084466267:web:2569473ee0bc70d4bf877e",
  measurementId: "G-GQKXNKTFEL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
