import React, { useState } from "react";

import ColorButtonContext from "../context/ColorButtonContext";

const ColorButton = ({ color, styles }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <button
      className="colorButton"
      onClick={() => setIsOpened((prevState) => !prevState)}
      style={{
        ...styles,
        backgroundColor: `#${color.hex_code}`,
        border: `3px solid #${color.hex_code}`,
      }}
    >
      <ColorButtonContext
        isOpened={isOpened}
        setIsOpened={setIsOpened}
        color={color}
      />
    </button>
  );
};

export default ColorButton;
