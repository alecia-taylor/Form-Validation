# Form Validation

A lightweight and efficient JavaScript-based form validation system designed to enhance user experience and data accuracy. This project ensures that form inputs meet required criteria before submission, improving usability and security.

## Features  
 ✔ **Real-time input validation** – Instant feedback on user inputs  
 ✔ **Custom error messages** – User-friendly guidance for corrections  
 ✔ **Regex-based validation** – Ensures data accuracy (e.g., email, password)  
 ✔ **Modular & reusable functions** – Easily integrate into any project  
 ✔ **Lightweight & fast** – No dependencies required  

## Technologies Used  
- **JavaScript (ES6+)** – For form validation logic  
- **HTML5** – Structuring the form elements  
- **CSS3** – Styling error messages and UI feedback  

## Installation & Setup  
1. Clone the repository:  
   ```sh
   git clone https://github.com/alecia-taylor/Form-Validation.git

 ##  Validation Rules & Examples
✔ Email Validation
Uses regex to ensure a proper email format:

js
Copy
Edit
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
if (!emailPattern.test(userEmail)) {
    showError("Invalid email format");
}
✔ Password Strength Check
Ensures at least 8 characters, one uppercase, one lowercase, and one number:

js
Copy
Edit
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
if (!passwordPattern.test(userPassword)) {
    showError("Password must be at least 8 characters with a mix of uppercase, lowercase, and numbers.");
}
 Usage Instructions
Type into the form fields to receive instant feedback.
Submit the form only when all fields are valid.
Customize validation rules in script.js to fit your requirements.

 Contributing
Contributions are welcome! Feel free to:

Fork the repo
Create a new branch:
sh
Copy
Edit
git checkout -b feature-name
Commit your changes:
sh
Copy
Edit
git commit -m "Add new feature"
Push to the branch:
sh
Copy
Edit
git push origin feature-name
Submit a pull request

 Contact
💬 Questions or suggestions? Reach out via:
📧 alecia.taylor0@gmail.co
🐦 linkedin.com/alecia-taylor
