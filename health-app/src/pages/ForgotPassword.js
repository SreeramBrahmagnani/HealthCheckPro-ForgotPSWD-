import React, { useState } from "react";
import "../styles/ForgotPassword.css"; // Update import path
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleReset = () => {
    alert(`Password reset link sent to ${email}`);
  };

  const handleGoBack = () => {
    window.history.back(); // Go back to the previous page
  };

  return (
    
    <div className="forgot-password-container">
       <Link to="/" className="logo-container">
        <img src="/assets/healthcheckpro-logo.webp" alt="Health App Logo" className="app-logo" />
      </Link>
      <div className="forgot-password-box">
        <h2>Forgot Password</h2>
        <div className="input-group">
          <span className="icon">✉</span>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button onClick={handleReset}>Send Password Reset Link</button>



        {/* Go Back button */}
        <button className="go-back-btn" onClick={handleGoBack}>Go Back</button>
      </div>
    </div>
  );
};

export default ForgotPassword;
