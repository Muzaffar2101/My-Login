# 🔐 Simple Login & Sign-Up Page

A front-end-only login and sign-up interface built with **HTML**, **CSS**, and **JavaScript**. This project simulates a basic authentication system using `sessionStorage` to temporarily store user credentials within the browser session.

---

## 🚀 Features

- Switch between **Login** and **Sign Up** views
- Field validation with alerts for common issues
- Temporarily saves users in the browser (no server)
- Simulated login/logout system
- Clean, responsive UI

---

## 🧪 How It Works

- **Sign Up** creates a new username/password combo stored in `sessionStorage`
- **Login** checks credentials against what's stored
- Data is cleared automatically when the tab or browser is closed

> ⚠️ This is for **demonstration purposes only**. No real password protection or encryption is implemented.

---

## 🛠️ To Run

1. Clone or download this repository.
2. Open `login.html` in your browser.
3. Create an account, log in, and test it out!

---

## 📦 Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- `sessionStorage` for temporary data handling

---

## 📌 Notes

- To keep data between sessions, change `sessionStorage` to `localStorage` in `script.js`
- Do **not** use this method in production — there’s no security or backend validation

---
