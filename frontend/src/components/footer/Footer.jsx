import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/sticky-note.png";
import { useSelector } from "react-redux";

const Footer = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="footer">
      <Link to="/" className="footerLogo">
        <img src={logo} alt="" />
        <span>&copy; {new Date().getFullYear()} QuickNote</span>
      </Link>
      <div className="footerLinksList">
        <Link to="/">Home</Link>
        <Link to="/notes">Notes</Link>
        {!isAuthenticated && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Footer;
