// js/login.js
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { auth } from "./firebase-config.js";
import { logAction } from "./logging.js";

document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault(); // This stops login.html?

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  logAction("Login attempt", email);

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    logAction("Login successful", user.uid);
    alert("Login Successful!");

    // Redirect to Career Selection
    setTimeout(() => {
      window.location.href = "career-selection.html";
    }, 500);

  } catch (error) {
    logAction(`Login failed: ${error.code}`, email);
    alert("Login Failed: " + error.message);
  }
});