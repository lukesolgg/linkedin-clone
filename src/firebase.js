import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCtR6_2tavd0qC6KEZOZuqEtliSGEVBkJk",
    authDomain: "linkedin-clone-e867e.firebaseapp.com",
    projectId: "linkedin-clone-e867e",
    storageBucket: "linkedin-clone-e867e.firebasestorage.app",
    messagingSenderId: "26327426665",
    appId: "1:26327426665:web:030edf48bf5aa9585364f8"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

export { db, auth };