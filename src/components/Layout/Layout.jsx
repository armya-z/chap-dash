import React from "react";
import Container from "../Container/Container";

const Layout = ({ children }) => {
  return (
    <div className="flex h-auto w-screen justify-center">
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
