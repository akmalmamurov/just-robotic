import React from "react";
import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";
import ScrollTop from "../components/scroll-top/ScrollTop";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <ScrollTop />
    </div>
  );
};

export default Layout;
