import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import { logoutUser } from "../../redux/auth/authSlice";
import ColorsContainer from "./ColorsContainer";

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="notesSidebar">
      <div className="notesSidebarHeader">
        <Link to="/" title="Home">
          <FontAwesomeIcon icon={faHouse} />
        </Link>
        <button title="Logout" onClick={() => dispatch(logoutUser())}>
          <FontAwesomeIcon icon={faRightFromBracket} />
        </button>
      </div>
      <div className="divider"></div>
      <div className="notesSidebarBody">
        <ColorsContainer />
      </div>
    </div>
  );
};

export default Sidebar;
