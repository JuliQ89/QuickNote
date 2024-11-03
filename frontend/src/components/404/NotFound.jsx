import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFoundContainer">
      <h1>Oops!</h1>
      <h3>404 - Page not found</h3>
      <p>
        The page you are looking for might have been removed had its name
        changed or is temporarily unavailable.
      </p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default NotFound;
