import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";

import { createNote, deleteColor } from "../../redux/types";

const Context = ({ isOpened, setIsOpened, color }) => {
  const dispatch = useDispatch();

  const handleCreateNote = () => {
    const middle_X_Axis = window.innerWidth / 2;
    const middle_Y_Axis = window.innerHeight / 2;
    const note = {
      color: color.id,
      title: "",
      description: "",
      pos_y: middle_Y_Axis,
      pos_x: middle_X_Axis,
    };
    dispatch(createNote(note));
  };

  const handleDeleteColor = (id) => {
    dispatch(deleteColor(id));
  };

  return (
    <div className="colorButtonContext" data-is_opened={isOpened}>
      <FontAwesomeIcon
        icon={faTrash}
        onClick={() => handleDeleteColor(color.id)}
      />
      <FontAwesomeIcon icon={faPlus} onClick={handleCreateNote} />
    </div>
  );
};

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
      <Context isOpened={isOpened} setIsOpened={setIsOpened} color={color} />
    </button>
  );
};

// {
//     "color": 1,
//     "title": "Programmieren",
//     "description": "Lorem ipsum dolor sit amet, consetetur sit."
// }

export default ColorButton;
