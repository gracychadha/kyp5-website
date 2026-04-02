import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/auth/common/header";
function AuthLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <div className="p--100" />

    </>
  );
}
export default AuthLayout;
