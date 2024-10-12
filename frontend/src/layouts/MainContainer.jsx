import React from "react";

import Header from "../components/header/Header";

const MainContainer = ({ children, header = true }) => {
  return (
    <>
      {header && <Header />}
      <main className="mainContainer">
        {children ? children : <h1>Diese Seite hat noch keinen Content!</h1>}
      </main>
    </>
  );
};

export default MainContainer;
