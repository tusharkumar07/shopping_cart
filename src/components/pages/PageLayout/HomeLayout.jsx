import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../ui/Footer/Footer";
import Navbar from "../../ui/navbar/Navbar";

const HomeLayout = ({ cart }) => {
  return (
    <React.Fragment>
      <Navbar cart={cart} />
      <Outlet></Outlet>
      <Footer />
    </React.Fragment>
  );
};

export default HomeLayout;
