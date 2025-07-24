//the Admin SDK:Is used on the server (backend).Has privileged access to your Firebase services (like managing users or full access to Firestore).Requires service account credentials to authenticate.

//1.Import Firebase Admin SDK
import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

// 2. Initialize Firebase Admin SDK
//Checks if Firebase Admin is already initialized
function initFirebaseAdmin() {
  const apps = getApps(); //Retrieves any existing Firebase admin app instances.

  if (!apps.length) {
    //If no apps are initialized, it initializes Firebase Admin.
    initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      }),
    });
  }

  // Returns the initialized Firebase Admin services
  return {
    auth: getAuth(),
    db: getFirestore(),
  };
}

// 3. Export the initialized Firebase Admin services
export const { auth, db } = initFirebaseAdmin();
