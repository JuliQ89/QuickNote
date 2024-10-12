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
        <div className="privateRouteContainer">
          <div>
            <h2>Dies ist eine Private Route</h2>
            <span>
              Um diese Seite zu sehen musst du dich{" "}
              <Link to="/login">anmelden</Link>
            </span>
            <span>
              Gehe zu <Link to="/">Home</Link>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default PrivateRoutes;
