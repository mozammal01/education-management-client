// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGv6RlD1Gwx1IGBIAb-5OrQYOZWprdhGc",
  authDomain: "education-management-93233.firebaseapp.com",
  projectId: "education-management-93233",
  storageBucket: "education-management-93233.appspot.com",
  messagingSenderId: "898514984843",
  appId: "1:898514984843:web:939d7c2357aa7ba929d98e"
  // apiKey: import.meta.env.VITE_apiKey,
  // authDomain: import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);