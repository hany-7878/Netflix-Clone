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

  return (
    <Routes>
      <Route
        path="/home"
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
  );
}

export default App;
