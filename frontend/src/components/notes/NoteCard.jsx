import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNoteSticky, faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteNote } from "../../redux/types";

// RR GG BB
const getTextColorBasedOnHex = (
  hex_code,
  light_color = "#ffffff",
  dark_color = "#000000"
) => {
  const threshold = 130;

  const red = parseInt(String(hex_code).slice(0, 2), 16);
  const green = parseInt(String(hex_code).slice(2, 4), 16);
  const blue = parseInt(String(hex_code).slice(4, 6), 16);
  const colorBrightness = (red * 299 + green * 587 + blue * 114) / 1000;

  return colorBrightness > threshold ? dark_color : light_color;
};

const NoteCard = ({ note }) => {
  const dispatch = useDispatch();

  const options = {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  const created = new Date(note.created_at).toLocaleDateString(
    "de-de",
    options
  );
  const updated = new Date(note.updated_at).toLocaleDateString(
    "de-de",
    options
  );

  const handleDeleteNote = (id) => {
    dispatch(deleteNote(id));
  };

  return (
    <div
      className="noteCard"
      style={{
        backgroundColor: `#${note.color.hex_code}aa`,
        top: `${note.pos_y}px`,
        left: `${note.pos_x}px`,
      }}
    >
      <div
        className="noteCardHeader"
        style={{ backgroundColor: `#${note.color.hex_code}` }}
      >
        <div
          style={{
            color: getTextColorBasedOnHex(
              note.color.hex_code,
              "var(--lightFont)",
              "var(--darkFont)"
            ),
          }}
        >
          <div>
            <FontAwesomeIcon icon={faNoteSticky} />
            <h2>{note.title}</h2>
          </div>
          <FontAwesomeIcon
            icon={faTrash}
            onClick={() => handleDeleteNote(note.id)}
          />
        </div>
      </div>

      <div
        className="noteCardBody"
        style={{
          color: getTextColorBasedOnHex(
            note.color.hex_code,
            "#DBDBE4",
            "#2D2D33"
          ),
        }}
      >
        {note.description}
      </div>

      <div
        className="noteCardFooter"
        style={{
          color: getTextColorBasedOnHex(
            note.color.hex_code,
            "#DBDBE4",
            "#2D2D33"
          ),
        }}
      >
        <small>{created}</small>
      </div>
    </div>
  );
};

export default NoteCard;
