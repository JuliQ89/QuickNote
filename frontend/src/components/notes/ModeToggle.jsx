import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import { updateMode } from "../../redux/types";

const ModeToggle = () => {
  const mode = useSelector((state) => state.mode.mode);
  const dispatch = useDispatch();
  const isDark = mode === "dark" ? true : false;

  return (
    <div className="modeToggle">
      <label
        htmlFor="mode_toggle"
        className={`${mode === "light" ? "light" : "dark"}`}
      >
        {mode === "light" ? (
          <FontAwesomeIcon icon={faSun} />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
      </label>
      <input
        type="checkbox"
        name="modeToggle"
        id="mode_toggle"
        checked={isDark}
        onChange={(e) =>
          dispatch(
            updateMode({
              is_dark: !isDark,
            })
          )
        }
      />
    </div>
  );
};

export default ModeToggle;
