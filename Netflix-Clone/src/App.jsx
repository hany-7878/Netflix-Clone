import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import { Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

function App() {
  // Manage authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  // Handle login
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        {/* Redirect to login if not logged in */}
        <Route
          path="/"
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={
            <Login
              onLoginSuccess={handleLoginSuccess}
              isSignUp={isSignUp}
              handleSignUpClick={() => setIsSignUp(true)}
              handleLoginClick={() => setIsSignUp(false)}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
