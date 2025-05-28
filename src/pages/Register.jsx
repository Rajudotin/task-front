import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/login.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreement, setAgreement] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      // const response = await axios.post("http://localhost:5000/register", {
      const response = await axios.post(
        "https://task-back-9zsx.onrender.com/",
        {
          username: username,
          password,
        }
      );
      console.log(response.data);
      localStorage.setItem("username", username);
      localStorage.setItem("userId", response.data.userId); // store userId if returned
      alert("Registration successful!");
      navigate("/taskmanager");
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Create Your Account</h1>
      <div className="login-form">
        <input
          type="text"
          placeholder="Username"
          className="login-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="login-input"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div className="checkbox-container">
          <input
            type="checkbox"
            checked={agreement}
            onChange={() => setAgreement(!agreement)}
          />
          <span>I agree to the terms and conditions</span>
        </div>
        <button
          className="login-button"
          onClick={handleRegister}
          disabled={!agreement}
        >
          Sign Up
        </button>
        <p className="or-text">or</p>
        <button className="social-login google">Sign Up with Google</button>
        <button className="social-login facebook">Sign Up with Facebook</button>
        <button className="social-login twitter">Sign Up with Twitter</button>
      </div>
    </div>
  );
};

export default Register;
