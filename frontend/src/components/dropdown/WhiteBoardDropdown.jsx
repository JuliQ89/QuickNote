import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const WhiteBoardDropdown = ({
  icon,
  pos_y = "0px",
  pos_x = "0px",
  children,
}) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div
      className={`whiteBoardDropdown ${isOpened ? "opened" : ""}`}
      style={{ top: pos_y, left: pos_x }}
    >
      <div
        className="whiteBoardDropdownIconContainer"
        onClick={(e) => setIsOpened(!isOpened)}
      >
        <FontAwesomeIcon icon={icon} />
      </div>
      {children && (
        <div className="whiteBoardDropdownChildrenContainer">{children}</div>
      )}
    </div>
  );
};

export default WhiteBoardDropdown;
