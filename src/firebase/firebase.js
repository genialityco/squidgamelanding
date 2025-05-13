import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAD6tkYtcVJqBIirwSMePmGiM6TNHu8MZ0",
    authDomain: "game-calamar.firebaseapp.com",
    projectId: "game-calamar",
    storageBucket: "game-calamar.firebasestorage.app",
    messagingSenderId: "557519792859",
    appId: "1:557519792859:web:15a46af616dc4642d0fafe",
    measurementId: "G-N07Q2MH81P"
};

// Inicializa Firebase

const app = initializeApp(firebaseConfig);

// Exporta auth y db

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;