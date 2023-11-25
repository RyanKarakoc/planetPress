// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4Vh24BnHJhxAWIWoO_jfdzaoCU8Xf3As",
  authDomain: "planet-press-2e777.firebaseapp.com",
  projectId: "planet-press-2e777",
  storageBucket: "planet-press-2e777.appspot.com",
  messagingSenderId: "911898735058",
  appId: "1:911898735058:web:c00aba099688f12729580b",
  measurementId: "G-C14G06TED6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);

// Don't need analytics for now...
// const analytics = getAnalytics(app);
