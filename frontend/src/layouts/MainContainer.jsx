import React from "react";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const MainContainer = ({ children, header = true, footer = true }) => {
  return (
    <>
      {header && <Header />}
      <main className="mainContainer">
        {children ? children : <h1>Diese Seite hat noch keinen Content!</h1>}
      </main>
      {footer && <Footer />}
    </>
  );
};

export default MainContainer;
