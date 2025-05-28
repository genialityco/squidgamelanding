import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSDCBoO53_QqeIBFF_GSUyR81nUS27jHU",
  authDomain: "calamar2.firebaseapp.com",
  projectId: "calamar2",
  storageBucket: "calamar2.firebasestorage.app",
  messagingSenderId: "259797119644",
  appId: "1:259797119644:web:cb85fd9ebc542b90923359",
  measurementId: "G-ZP7H276P1V",
};

// Inicializa Firebase

const app = initializeApp(firebaseConfig);

// Exporta auth y db

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
