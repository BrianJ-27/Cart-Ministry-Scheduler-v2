// Import the initializeApp
import { initializeApp } from "firebase/app";
// Import necessary firebase librares
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const cmsFirebaseConfig = {
  apiKey: "AIzaSyD_faXKVDzZ6FrNIPoaDPb8dLAJMdVlc_c",
  authDomain: "cart-ministry-db.firebaseapp.com",
  projectId: "cart-ministry-db",
  storageBucket: "cart-ministry-db.appspot.com",
  messagingSenderId: "848619838509",
  appId: "1:848619838509:web:289d56cab0ea41a028aca4",
};

// Initialize Firebase
const app = initializeApp(cmsFirebaseConfig);

// export this "auth" variable throughtout the app
export const auth = getAuth(app);
