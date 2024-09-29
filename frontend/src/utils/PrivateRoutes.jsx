import React from "react";
import { Link } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const isAuthenticated = true;
  return (
    <>
      {isAuthenticated ? (
        children
      ) : (
        <span>
          Du bist nicht eingeloggt <Link to="/login">Login</Link>
        </span>
      )}
    </>
  );
};

export default PrivateRoutes;
