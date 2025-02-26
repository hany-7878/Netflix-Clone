
import './App.css'
import Home from "./Pages/Home/Home"
import Login from './Pages/Login/Login'
import { useState } from "react";

function App() {
  // Manage state to toggle between Login and Home
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  // Handle successful login
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  // Toggle to sign-up view
  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  // Toggle to login view
  const handleLoginClick = () => {
    setIsSignUp(false);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <Home />
      ) : (
        <Login
          onLoginSuccess={handleLoginSuccess}
          isSignUp={isSignUp}
          handleSignUpClick={handleSignUpClick}
          handleLoginClick={handleLoginClick}
        />
      )}
    </div>
  );
}

export default App;

