
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interview-agent-ce6e0.firebaseapp.com",
  projectId: "interview-agent-ce6e0",
  storageBucket: "interview-agent-ce6e0.firebasestorage.app",
  messagingSenderId: "910259239364",
  appId: "1:910259239364:web:810318f07c5ce81f14cc91"   
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}