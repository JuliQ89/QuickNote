import React from "react";
import { Link, NavLink } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/auth/authSlice";

const NavbarLink = ({ link, content }) => {
  return (
    <NavLink
      to={link ? link : "/"}
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      {content}
    </NavLink>
  );
};

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <header className="header">
      <Link to="/" className="headerLogo">
        <h2>QuickNote</h2>
      </Link>

      <nav className="headerNav">
        <NavbarLink link="/" content="Home" />
        <NavbarLink link="/notes" content="Notes" />
        {!isAuthenticated ? (
          <>
            <NavbarLink link="/login" content="Login" />
            <NavbarLink link="/register" content="Register" />
          </>
        ) : (
          <button onClick={() => dispatch(logoutUser())}>Logout</button>
        )}
      </nav>
    </header>
  );
};

export default Header;
