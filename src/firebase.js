import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9f1aVGPFzfVzMOvACXcDEIOH1dbQEOiw",
  authDomain: "skillquest-ai-prod.firebaseapp.com",
  projectId: "skillquest-ai-prod",
  storageBucket: "skillquest-ai-prod.firebasestorage.app",
  messagingSenderId: "343623332668",
  appId: "1:343623332668:web:576b8085afc9bd11222439"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);