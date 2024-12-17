// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCRbTl2pB9_2sx31SgEI9UpTKigl1XewCA",
  authDomain: "grad-mate-ai.firebaseapp.com",
  projectId: "grad-mate-ai",
  storageBucket: "grad-mate-ai.appspot.com",
  messagingSenderId: "1059699849464",
  appId: "1:1059699849464:web:16c29089e37b47ed91e30d",
  measurementId: "G-CD91S9RYDJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const appForStorage = initializeApp(firebaseConfigForStorage);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
