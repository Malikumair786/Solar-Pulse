import React from "react";

import Sidebar from "components/Sidebar";
import Header from "components/Header/Header";
import Footer from "components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <div>
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
