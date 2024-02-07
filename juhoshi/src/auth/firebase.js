import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCNxcPEXkAZU6DFQWftWmSlgwVlks811eU",
  authDomain: "fir-1-f66da.firebaseapp.com",
  projectId: "fir-1-f66da",
  storageBucket: "fir-1-f66da.appspot.com",
  messagingSenderId: "610353524388",
  appId: "1:610353524388:web:4df712f396b1ca516fc031",
  measurementId: "G-SF5KFBHEZV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
export { app, auth };
