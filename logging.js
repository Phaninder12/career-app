// js/logging.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

/* --------------------------------------------------------------
   1. Firebase config – **copy-paste exactly the same object**
   you already use in login.html / signup.html
   -------------------------------------------------------------- */
const firebaseConfig = {
  apiKey: "AIzaSyCosehypmklp8ROxKDI8sEmwRV-kksFtqY",
  authDomain: "career-app-86056.firebaseapp.com",
  projectId: "career-app-86056",
  storageBucket: "career-app-86056.firebasestorage.app",
  messagingSenderId: "832412818085",
  appId: "1:832412818085:web:01fb3fb2c65c77c76a4b4c",
  measurementId: "G-P5DEJHWG6N"
};


/* --------------------------------------------------------------
   2. Initialise *once* and cache the Firestore instance
   -------------------------------------------------------------- */
let db = null;
try {
  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);
} catch (e) {
  console.warn("Firebase init failed – logging will stay in console only", e);
}

/* --------------------------------------------------------------
   3. Public helper – call it from any page:
       logAction("Student logged in", uid);
   -------------------------------------------------------------- */
export function logAction(action, userId = "Guest") {
  const entry = {
    action,
    userId,
    timestamp: serverTimestamp(),          // Firestore server time (more reliable)
    page: window.location.pathname,
    href: window.location.href
  };

  // ---- Console preview (nice colour) ----
  console.log("%c[LOG]", "color: cyan; font-weight: bold;", entry);

  // ---- Write to Firestore (fire-and-forget) ----
  if (db) {
    addDoc(collection(db, "logs"), entry).catch(err => {
      console.error("Firestore write failed:", err);
    });
  }
}