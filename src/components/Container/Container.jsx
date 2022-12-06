import React from "react";
import Header from "../Comon/Header";

const Container = ({ children }) => {
  return (
    <>
      <div className="container flex w-screen flex-col justify-center ">
        <Header />
        <div>{children}</div>
      </div>
    </>
  );
};

export default Container;
