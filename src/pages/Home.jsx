import React from "react";
import { Link } from "react-router-dom";
// import { useState } from "react";
import "../styles/home.css"; // Import your CSS file for styling

const HomePage = () => {
  return (
    <div className="home-container">
      <h1> Task App</h1>
      <div className="home-buttons">
      
        <ul>
          <li>
            <button><Link to="/login">Login</Link></button>
          </li>
          <li>
            <button><Link to="/register">Register</Link></button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default HomePage;
