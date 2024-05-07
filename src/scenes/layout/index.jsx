import React from "react";
import Sidebar from "components/Sidebar";
import Header from "components/Header/Header";
import Footer from "components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-grow bg-secondary">
          <Sidebar />
          <div className="flex-grow bg-secondary">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
