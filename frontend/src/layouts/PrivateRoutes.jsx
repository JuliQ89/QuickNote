import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const PrivateRoutes = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      {isAuthenticated ? (
        <>{children}</>
      ) : (
        <span>
          Du bist nicht eingeloggt <Link to="/login">Login</Link>
        </span>
      )}
    </>
  );
};

export default PrivateRoutes;
