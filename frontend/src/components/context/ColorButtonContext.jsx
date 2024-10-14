import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";

import { createNote, deleteColor } from "../../redux/types";

const ColorButtonContext = ({ isOpened, setIsOpened, color }) => {
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

export default ColorButtonContext;
