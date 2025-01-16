import React from "react";
import Header from "./src/components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./src/components/Footer/Footer";
import Routers from "./src/components/Route/Routers";
import Home from "./src/components/Home/Home";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <Home/>
      <Footer />
    </div>
  );
}

export default Layout;
