import React from "react";
import { useDispatch } from "react-redux";

import { createNote } from "../../redux/types";

const ColorButton = ({ children, color, styles }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const note = {
      color: color.id,
      title: "",
      description: "",
    };
    dispatch(createNote(note));
  };

  return (
    <button
      className="colorButton"
      onClick={() => handleClick()}
      style={{
        ...styles,
        backgroundColor: `#${color.hex_code}`,
        border: `3px solid #${color.hex_code}`,
      }}
    >
      {children && children}
    </button>
  );
};

// {
//     "color": 1,
//     "title": "Programmieren",
//     "description": "Lorem ipsum dolor sit amet, consetetur sit."
// }

export default ColorButton;
