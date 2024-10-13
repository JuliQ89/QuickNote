import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

import ColorButton from "./ColorButton";
import { createColor } from "../../redux/types";

const ColorsContainer = () => {
  const dispatch = useDispatch();
  const initialInputColorValue = "#3876e0";
  const [inputColor, setInputColor] = useState(initialInputColorValue);
  const colors = useSelector((store) => store.color.colors);

  const handleCreateColor = () => {
    const hex_code = String(inputColor).split("#")[1];
    dispatch(
      createColor({
        hex_code,
      })
    );
    setInputColor(initialInputColorValue);
  };

  return (
    <div className="colorsContainer">
      <div className="appendColorContainer">
        <div className="appendColorButtonContainer">
          <input
            type="color"
            name="appendColorButton"
            value={inputColor}
            onChange={(e) => setInputColor(e.target.value)}
            id="append_color_button"
          />
        </div>
        <button
          className="colorButton"
          id="addNoteColorButton"
          onClick={handleCreateColor}
          style={{
            border: `2px dashed #000`,
          }}
        >
          <FontAwesomeIcon icon={faAdd} />
        </button>
      </div>
      <div className="divider"></div>
      <div className="createdColorsContainer">
        {colors &&
          colors.map((color) => <ColorButton key={color.id} color={color} />)}
      </div>
    </div>
  );
};

export default ColorsContainer;
