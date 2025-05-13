import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { Header } from "@/components/header";
import { ScrollTop } from "@/components/scroll-top";
import { Footer } from "@/components/footer";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <ScrollTop />
      <Footer />
    </Fragment>
  );
};

export default Layout;
