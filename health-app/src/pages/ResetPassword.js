import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ForgotPassword.css"; // Reuse same styles
import { Eye, EyeOff } from "lucide-react"; // Icon for show/hide password
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate(); // Navigation

  // Password strength validation
  const isValidPassword = (password) => {
    return (
      password.length >= 8 &&
      /[A-Z]/.test(password) && // Uppercase
      /[a-z]/.test(password) && // Lowercase
      /\d/.test(password) && // Number
      /[\W_]/.test(password) // Special character
    );
  };

  // Check if passwords match
  const passwordsMatch = newPassword === confirmPassword && confirmPassword !== "";

  const handleResetPassword = () => {
    if (isValidPassword(newPassword) && passwordsMatch) {
      alert("Password reset successfully!");
      navigate("/login"); // Redirect to login
    }
  };

  return (
  
    <div className="forgot-password-container">
             <Link to="/" className="logo-container">
              <img src="/assets/healthcheckpro-logo.webp" alt="Health App Logo" className="app-logo" />
            </Link>
      <div className="forgot-password-box">
        <h2>Reset Password</h2>

        {/* New Password Field */}
        <div className="input-group">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <span
            className="icon"
            onClick={() => setShowPassword(!showPassword)}
            style={{ cursor: "pointer" }}
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </span>
        </div>

        {/* Password Validation Message */}
        {!isValidPassword(newPassword) && newPassword.length > 0 && (
          <p className="error-text">
            Password must be at least 8 characters, include uppercase, lowercase, number, and special character.
          </p>
        )}

        {/* Confirm Password Field */}
        <div className="input-group">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span
            className="icon"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            style={{ cursor: "pointer" }}
          >
            {showConfirmPassword ? <EyeOff /> : <Eye />}
          </span>
        </div>

        {/* Confirm Password Match Warning */}
        {!passwordsMatch && confirmPassword.length > 0 && (
          <p className="error-text">Passwords do not match!</p>
        )}

        {/* Reset Button (Disabled Until Conditions Are Met) */}
        <button
          onClick={handleResetPassword}
          disabled={!isValidPassword(newPassword) || !passwordsMatch}
          className={!isValidPassword(newPassword) || !passwordsMatch ? "disabled-btn" : ""}
        >
          Reset Password
        </button>


      </div>
    </div>
  );
};

export default ResetPassword;
