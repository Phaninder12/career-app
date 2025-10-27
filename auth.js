// ------------------------------
// Login and Signup Logic
// ------------------------------

// Login Function
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      const user = userCredential.user;
      logAction("User logged in", user.email);
      alert("Login successful!");
      window.location.href = "dashboard.html";
    })
    .catch(error => {
      console.error(error.message);
      alert("Invalid credentials. Try again.");
    });
}

// Signup Function
function signup() {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      const user = userCredential.user;
      db.collection("students").doc(user.uid).set({
        email: user.email,
        createdAt: new Date().toISOString()
      });
      logAction("New user registered", user.email);
      alert("Account created successfully!");
      window.location.href = "login.html";
    })
    .catch(error => {
      console.error(error.message);
      alert(error.message);
    });
}
