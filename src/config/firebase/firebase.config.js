// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGSQ9dGzOqN_289gwnnKRuEhjG9Y8ipSI",
  authDomain: "bistro-boss-58e47.firebaseapp.com",
  projectId: "bistro-boss-58e47",
  storageBucket: "bistro-boss-58e47.appspot.com",
  messagingSenderId: "129282091958",
  appId: "1:129282091958:web:1a658bfef7e36b4b03af17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth