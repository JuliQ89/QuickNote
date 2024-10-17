import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import { updateMode } from "../../redux/types";

const ModeToggle = () => {
  const mode = useSelector((state) => state.mode.mode);
  const dispatch = useDispatch();
  const isDark = mode.is_dark;

  return (
    <div className="modeToggle">
      <label htmlFor="mode_toggle" className={`${isDark ? "dark" : "light"}`}>
        {isDark ? (
          <FontAwesomeIcon icon={faMoon} />
        ) : (
          <FontAwesomeIcon icon={faSun} />
        )}
      </label>
      <input
        type="checkbox"
        name="modeToggle"
        id="mode_toggle"
        checked={isDark}
        onChange={(e) => {
          dispatch(
            updateMode({
              is_dark: !isDark,
              id: mode.id,
            })
          );
        }}
      />
    </div>
  );
};

export default ModeToggle;
