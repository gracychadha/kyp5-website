import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/test-layout/Header";
import Footer from "../components/test-layout/Footer";
import ScrollToTop from "../components/common/ScrollToTop";
import { i } from "framer-motion/client";

function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <ScrollToTop />
    </>
  );
}

export default MainLayout;
