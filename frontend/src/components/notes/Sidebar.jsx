import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faAdd } from "@fortawesome/free-solid-svg-icons";

import ColorButton from "./ColorButton";

const ColorsContainer = () => {
  const colors = useSelector((store) => store.color.colors);

  return (
    <div className="colorsContainer">
      <div className="appendColorButtonContainer">
        {/* <FontAwesomeIcon icon={faAdd} /> */}
        <input
          type="color"
          name="appendColorButton"
          defaultValue="#2a2b33"
          id="append_color_button"
        />
      </div>
      {colors &&
        colors.map((color) => <ColorButton key={color.id} color={color} />)}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="notesSidebar">
      <div className="notesSidebarHeader">
        <Link to="/" title="Home">
          <FontAwesomeIcon icon={faHouse} size="lg" />
        </Link>
      </div>
      <div className="notesSidebarBody">
        <ColorsContainer />
      </div>
    </div>
  );
};

export default Sidebar;
