import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNoteSticky, faTrash } from "@fortawesome/free-solid-svg-icons";

import { getTextColorBasedOnHex } from "../../utils/helberFunctions";
import { deleteNote, updateNote } from "../../redux/types";

const NoteCard = ({ note }) => {
  const [valuesHaveChanges, setValuesHaveChanges] = useState({
    title: false,
    description: false,
  });
  const [values, setValues] = useState({
    title: note.title,
    description: note.description,
  });
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

  const handleCardChanges = (e, id) => {
    const hasChanges = valuesHaveChanges.title || valuesHaveChanges.description;
    if (e.ctrlKey && e.key === "s") {
      e.preventDefault();
      if (hasChanges) {
        dispatch(updateNote({ ...values, id }));
        setValuesHaveChanges({
          ...valuesHaveChanges,
          title: false,
          description: false,
        });
      }
    }
  };

  return (
    <div
      className="noteCard"
      onKeyDown={(e) => handleCardChanges(e, note.id)}
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
            <h2>
              <input
                type="text"
                name="noteTitle"
                id="note_title"
                spellCheck={false}
                value={values.title}
                onChange={(e) => {
                  setValues({ ...values, title: e.target.value });
                  setValuesHaveChanges({ ...valuesHaveChanges, title: true });
                }}
                style={{
                  color: getTextColorBasedOnHex(
                    note.color.hex_code,
                    "var(--lightFont)",
                    "var(--darkFont)"
                  ),
                  fontStyle: valuesHaveChanges.title ? "italic" : null,
                }}
              />
            </h2>
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
        <textarea
          type="text"
          name="noteDescription"
          id="note_description"
          spellCheck={false}
          value={values.description}
          onChange={(e) => {
            setValues({ ...values, description: e.target.value });
            setValuesHaveChanges({ ...valuesHaveChanges, description: true });
          }}
          style={{
            fontStyle: valuesHaveChanges.description ? "italic" : null,
          }}
        ></textarea>
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
