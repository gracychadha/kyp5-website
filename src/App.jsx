// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Home from "./pages/home/Home";
import AboutUs from "./pages/about-us/AboutUs";
import Instructor from "./pages/instructor/Instructor";
import Contact from "./pages/contact-us/Contact";
import Blogs from "./pages/our-blogs/Blogs";
import Gallery from "./pages/gallery/Gallery";
import Login from "./pages/login/Login";
import SignUp from "./pages/sign-up/SignUp";
import Course from "./pages/course/Course";
import PrivacyPolicy from "./pages/privacy-policy/PrivacyPolicy";
import TermsCondition from "./pages/terms-conditions/TermsCondition";
function App() {
  return (
    <Router>
      <Routes>
        {/*  Public Website with MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-team" element={<Instructor />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/our-blogs" element={<Blogs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsCondition />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
