import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
import "./login.css";
import logo from "../../assets/Images/Logonetflix.png";
import banner from "../../assets/Images/BannerImage.png";

const Login = ({ onLoginSuccess, isSignUp, handleSignUpClick, handleLoginClick }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("email");
    if (storedEmail) {
      setFormData((prev) => ({ ...prev, email: storedEmail }));
      setRememberMe(true);
    }
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { email, password } = formData;
  
    if (!email.trim() || !password) {
      setError("Please fill in both fields.");
      setLoading(false);
      return;
    }
  
    const storedUser = JSON.parse(localStorage.getItem(email.trim()));
    if (storedUser && bcrypt.compareSync(password, storedUser.password)) {
      if (rememberMe) {
        sessionStorage.setItem("email", email.trim()); // Store email in sessionStorage if 'Remember Me' is checked
      } else {
        sessionStorage.removeItem("email");
      }
      onLoginSuccess(); // Update login state
      localStorage.setItem("isLoggedIn", "true"); // Persist login state
      navigate("/home");
    } else {
      setError("Invalid email or password!");
    }
    setLoading(false);
  };
  

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { email, password, name, confirmPassword } = formData;

    if (!email || !password || !name || !confirmPassword) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      setLoading(false);
      return;
    }

    if (localStorage.getItem(email)) {
      setError("Email is already registered!");
      setLoading(false);
      return;
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    localStorage.setItem(email, JSON.stringify({ name, email, password: hashedPassword }));
    setLoading(false);
    alert("Sign-Up Successful! Please Log In.");
    handleLoginClick();
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${banner})` }}>
      <img src={logo} alt="Netflix Logo" className="netflix-logo" />
      <div className="overlay"></div>
      <div className="login-box">
        <h2 className="login-title">{isSignUp ? "Sign Up" : "Sign In"}</h2>
        {error && <p className="error-message">{error}</p>}
        {isSignUp ? (
          <form className="login-form" onSubmit={handleSignUpSubmit}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} required />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleInputChange} required />
            <button type="submit" disabled={loading} className="login-btn">
              {loading ? <span className="spinner"></span> : "Sign Up"}
            </button>
          </form>
        ) : (
          <form className="login-form" onSubmit={handleLoginSubmit}>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <button type="button" className="show-password-btn" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <button type="submit" disabled={loading} className="login-btn">
              {loading ? <span className="spinner"></span> : "Sign In"}
            </button>
          </form>
        )}
        <div className="remember-me">
          <label>
            <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} /> Remember Me
          </label>
        </div>
        <div className="signup-options">
          <p>
            {isSignUp ? (
              <span>Already have an account? <a href="#" onClick={(e) => { e.preventDefault(); handleLoginClick(); }}>Log In</a></span>
            ) : (
              <span>New here? <a href="#" onClick={(e) => { e.preventDefault(); handleSignUpClick(); }}>Sign Up</a></span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
