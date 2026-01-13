import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedAdminRoute({ children }) {
  const token = localStorage.getItem("adminToken");

  // Agar token nahi hai to adminPanel access nahi, login pe bhejo
  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedAdminRoute;
