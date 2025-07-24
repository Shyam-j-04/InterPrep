//Does majorly 4 tasks.
// 1. Import the functions you need from the Firebase SDKs
import { getApp, getApps, initializeApp } from "firebase/app"; //firebase/app: for Core Firebase functions.
import { getAuth } from "firebase/auth"; //firebase/auth: For authentication (login, signup, etc.).
import { getFirestore } from "firebase/firestore"; //firebase/firestore: For Firestore (Firebase's NoSQL database)

//2. Defining firebase configuration using environment variables
//This object contains keys and IDs required to connect your app to your Firebase project.
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

//3. Initialize Firebase
//ensures Firebase is only initialized once, even during hot reloads in development.
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// getApps() checks if an instance already exists.If not, initializeApp(firebaseConfig) creates one.

//4. Exporting Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
