import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// config
const firebaseConfig = {
  apiKey: "AIzaSyC0fRFyYXo-KD2mjep-4rI_3VoJhvsW8PY",
  authDomain: "paaigam-setup.firebaseapp.com",
  projectId: "paaigam-setup",
  storageBucket: "paaigam-setup.firebasestorage.app",
  messagingSenderId: "737229869059",
  appId: "1:737229869059:web:5e4d015a1231c838ebfe36",
};

// ✅ initialize ONCE
const app = initializeApp(firebaseConfig);

// ✅ export db
export const db = getFirestore(app);