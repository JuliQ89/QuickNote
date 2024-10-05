import React from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/authSlice";

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <header className="header">
      <Link to="/">
        <h2>Logo</h2>
      </Link>

      <nav className="headerNav">
        <Link to="/notes">Notes</Link>
        {!isAuthenticated ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <button onClick={() => dispatch(logout())}>Logout</button>
        )}
      </nav>
    </header>
  );
};

export default Header;
