import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNote } from "../../redux/types";

const NoteCardContext = ({ modalIsOpened, setModalIsOpened, note }) => {
  const dispatch = useDispatch();
  const colors = useSelector((state) => state.color.colors);

  const handleColorChange = (color) => {
    dispatch(
      updateNote({
        color,
        id: note.id,
      })
    );
  };

  return (
    <div
      className="noteCardContextMenu"
      style={{ display: `${modalIsOpened ? "flex" : "none"}` }}
      onMouseDown={(e) => e.stopPropagation()}
    >
      {colors &&
        colors.map((color) => (
          <button
            onClick={() => handleColorChange(color)}
            className="noteCardContextColor"
            key={color.id}
            style={{
              backgroundColor: `#${color?.hex_code}`,
            }}
          ></button>
        ))}
    </div>
  );
};

export default NoteCardContext;
