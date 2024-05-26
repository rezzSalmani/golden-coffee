import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_SECURE_API_KEY,
  authDomain: import.meta.env.VITE_SECURE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_SECURE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_SECURE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_SECURE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_SECURE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
