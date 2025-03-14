import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword"; // Import reset page if created
import { Link } from "react-router-dom";

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/forgot-password" />} /> {/* Redirect to Forgot Password */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
