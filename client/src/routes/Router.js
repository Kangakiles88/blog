import React, { Fragment } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import AppNavbar from "../components/AppNavbar";

const MyRouter = () => (
  <Fragment>
    <AppNavbar />
    <Header />
    <h1>Hello</h1>
    <Footer />
  </Fragment>
);

export default MyRouter;
