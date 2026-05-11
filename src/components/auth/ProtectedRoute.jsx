import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("studentToken");

  if (!token) {
    return <Navigate to="/test" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
