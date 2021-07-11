import React from "react";
import classes from "./Layout.module.css";
import NavBar from "./NavBar";

const Layout = (props) => {
  return (
    <>
      <NavBar />
      <main className={classes.main}>{props.children}</main>
    </>
  );
};

export default Layout;
