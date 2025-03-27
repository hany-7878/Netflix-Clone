
import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  // Retrieve login state from localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [isSignUp, setIsSignUp] = useState(false);

  // Update localStorage when login state changes
  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  // Handle login
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn"); // Remove login status
  };

  return (
    <Routes>
      {/* Default Route ("/") should redirect based on login status */}
      <Route path="/" element={<Navigate to={isLoggedIn ? "/home" : "/login"} />} />

      <Route
        path="/home"
        element={isLoggedIn ? <Home onLogout={handleLogout} /> : <Navigate to="/login" />}
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
  );
}

export default App;
