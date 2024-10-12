import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setMode } from "../../redux/mode/modeSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const ModeToggle = () => {
  const mode = useSelector((state) => state.mode.mode);
  const [isDark, setIsDark] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const isDarkMode = isDark;
    const isLightMode = !isDark;
    if (isDarkMode) dispatch(setMode("dark"));
    if (isLightMode) dispatch(setMode("light"));
  }, [isDark]);

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
        onChange={(e) => setIsDark(e.target.checked)}
      />
    </div>
  );
};

export default ModeToggle;
