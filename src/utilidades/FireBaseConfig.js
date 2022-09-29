// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCKUxIdAGHTuhPPV9bzOf3-NHr3glNq8Ok",
  authDomain: "ltxwatches.firebaseapp.com",
  projectId: "ltxwatches",
  storageBucket: "ltxwatches.appspot.com",
  messagingSenderId: "443272228488",
  appId: "1:443272228488:web:4bc6054994be4ae1e0b93d"
};

initializeApp(firebaseConfig);
const db = getFirestore();
export default db