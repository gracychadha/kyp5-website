import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("studentToken");
  const location = useLocation();

  if (!token) {
    return <Navigate to={`/test${location.search}`} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
