import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("studentData");
    if (storedUser) {
      try {
        setStudent(JSON.parse(storedUser));
      } catch (e) {
        console.error("Error parsing student data from localStorage", e);
        localStorage.removeItem("studentData");
      }
    }
    setLoading(false);
  }, []);

  const login = (studentData, token) => {
    localStorage.setItem("studentData", JSON.stringify(studentData));
    localStorage.setItem("studentToken", token);
    setStudent(studentData);
  };

  const logout = () => {
    localStorage.removeItem("studentToken");
    localStorage.removeItem("studentData");
    localStorage.removeItem("attemptId");
    setStudent(null);
  };

  return (
    <AuthContext.Provider value={{ student, login, logout, loading, setStudent }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
