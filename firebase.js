import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAaG0oQ7mscd7jtVIWKYn4HrhVS_PpQK5s",
  authDomain: "avtive-web.firebaseapp.com",
  projectId: "avtive-web",
  storageBucket: "avtive-web.firebasestorage.app",
  messagingSenderId: "179897834002",
  appId: "1:179897834002:web:149d2ba21ea874a5c4d6cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };