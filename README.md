# Netflix-Style Login Page

A fully responsive, full-stack login page application mimicking the Netflix UI. Built with React (Vite) for the frontend and Node.js (Express) for the backend.

## 🚀 Features

- **Pixel-Perfect UI:** Dark cinematic background with dimmed movie posters, a centered light peach login card, and Netflix's signature floating-label inputs.
- **Frontend Validation:** Real-time form validation checking for empty fields, correct email format, and password length requirements.
- **Backend Authentication:** mock user authentication using an Express server and Axios for API requests.
- **Protected Dashboard:** Redirects strictly authenticated users to a protected dashboard featuring account details and quick action cards. Shows server-side error messages for invalid credentials.
- **Modern Tech Stack:** React 19, Vite 8, React Router DOM 7, and Express 5.
- **Custom CSS:** 100% custom styling mapped specifically to replicate the Netflix experience (no UI libraries used).

## 📂 Project Structure

- `server/server.js`: The Express.js backend handling login requests on port 5000.
- `src/pages/Login.jsx`: The main React component for the login page containing the form UI and validation logic.
- `src/pages/Dashboard.jsx`: The React component for the protected dashboard.
- `src/index.css`: Global styles including the cinematic background setup.
- `public/bg.png`: The background wallpaper.

## 🛠️ Installation & Setup

1. **Install Dependencies:**
   Ensure you are in the root folder of the project.
   ```bash
   npm install
   ```
   *Note: This installs both the frontend dependencies and the Express + CORS backend dependencies.*

2. **Start the Backend Server (Terminal 1):**
   ```bash
   npm run server
   ```
   *Runs on http://localhost:5000*

3. **Start the Frontend Application (Terminal 2):**
   ```bash
   npm run dev
   ```
   *Runs on http://localhost:5173*

## 🔑 Test Credentials

Use any of the following mock accounts to test the successful login flow:

| Email | Password |
| :--- | :--- |
| john@example.com | john123 |
| jane@example.com | jane123 |
| admin@example.com | admin123 |

Any other combination will trigger a server-side "Invalid email or password" error.
