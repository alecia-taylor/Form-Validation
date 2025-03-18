const registrationForm = document.getElementById("registration");
const loginForm = document.getElementById("login");
const errorDisplay = document.getElementById("errorDisplay");

function showError(message) {
  errorDisplay.textContent = message;
  errorDisplay.style.display = "block";
  setTimeout(() => {
    errorDisplay.style.display = "none";
  }, 3000);
}

// Validate Username
function validateUsername(username) {
  if (!username) return "Username cannot be blank.";
  if (username.length < 4) return "Username must be at least 4 characters.";
  if (new Set(username).size < 2) return "Username must contain at least 2 unique characters.";
  if (/[^a-zA-Z0-9]/.test(username)) return "Username cannot contain special characters or spaces.";
 
  let users = JSON.parse(localStorage.getItem("users")) || {};
  if (users[username.toLowerCase()]) return "No cap, this username is already taken.";
  return null;
}

// Validate Email
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) return "Be fr, this email address is invalid.";
  if (email.endsWith("@example.com")) return "No way! Email cannot be from 'example.com'.";
  return null;
}

// Validate Password
function validatePassword(password, username) {
  if (password.length < 12) return "Reread the requirements..Password must be at least 12 characters.";
  if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) return "Reread the requirements..Password must contain upper and lowercase letters.";
  if (!/\d/.test(password)) return "Reread the requirements..Password must contain at least one number.";
  if (!/[^a-zA-Z0-9]/.test(password)) return "Reread the requirements..Password must contain at least one special character.";
  if (/password/i.test(password)) return "Password cannot contain the word 'password'.";
  if (password.includes(username)) return "Password cannot contain the username.";
  return null;
}

// Registration Form Handling
registrationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(registrationForm);
  const username = formData.get("username").trim();
  const email = formData.get("email").trim().toLowerCase();
  const password = formData.get("password");
  const passwordCheck = formData.get("passwordCheck");
  const termsAccepted = formData.get("terms");

  let errorMessage = validateUsername(username) ||
                      validateEmail(email) ||
                      validatePassword(password, username);

  if (!termsAccepted) errorMessage = "You must accept the terms and conditions.";
  if (password !== passwordCheck) errorMessage = "Passwords do not match.";

  if (errorMessage) {
    showError(errorMessage);
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || {};
  users[username.toLowerCase()] = { username, email, password };
  localStorage.setItem("users", JSON.stringify(users));

  registrationForm.reset();
  showError("Registration successful!");
});

// Login Form Handling
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(loginForm);
  const username = formData.get("username").trim().toLowerCase();
  const password = formData.get("password");

  let users = JSON.parse(localStorage.getItem("users")) || {};
 
  if (!users[username]) {
    showError("Username does not exist.");
    return;
  }

  if (users[username].password !== password) {
    showError("Incorrect password.");
    return;
  }

  loginForm.reset();
  showError("Ayyye, Login successful!");
  console.log("users" + users);
});