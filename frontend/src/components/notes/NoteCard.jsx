import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNoteSticky,
  faTrash,
  faBrush,
  faArrowsRotate,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import { getTextColorBasedOnHex } from "../../utils/helberFunctions";
import { deleteNote, updateNote } from "../../redux/types";

import NoteCardContext from "../context/NoteCardContext";

const NoteCard = ({ note }) => {
  const [modalIsOpened, setModalIsOpened] = useState(false);

  const targetCard = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [cardKoordinates, setCardKoordinates] = useState({
    pos_y: note.pos_y,
    pos_x: note.pos_x,
  });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const dispatch = useDispatch();

  const [valuesHaveChanges, setValuesHaveChanges] = useState({
    title: false,
    description: false,
  });
  const [values, setValues] = useState({
    title: note.title,
    description: note.description,
  });
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

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - cardKoordinates.pos_x,
      y: e.clientY - cardKoordinates.pos_y,
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setCardKoordinates({
        pos_x: e.clientX - dragStart.x,
        pos_y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      dispatch(
        updateNote({
          pos_x: cardKoordinates.pos_x,
          pos_y: cardKoordinates.pos_y,
          id: note.id,
        })
      );
    }
  };

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
      ref={targetCard}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onKeyDown={(e) => handleCardChanges(e, note.id)}
      className="noteCard"
      style={{
        backgroundColor: `#${note.color.hex_code}aa`,
        top: `${cardKoordinates.pos_y}px`,
        left: `${cardKoordinates.pos_x}px`,
      }}
    >
      <NoteCardContext
        modalIsOpened={modalIsOpened}
        setModalIsOpened={setModalIsOpened}
        note={note}
      />

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
                onMouseDown={(e) => e.stopPropagation()}
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
          <div className="cardHeaderOptions">
            <FontAwesomeIcon
              className="themeNoteButton"
              icon={faBrush}
              onClick={() => setModalIsOpened((prevState) => !prevState)}
            />
            <FontAwesomeIcon
              className="deleteNoteButton"
              icon={faTrash}
              onClick={() => handleDeleteNote(note.id)}
            />
          </div>
        </div>
      </div>

      <div className="noteCardBody">
        <textarea
          type="text"
          name="noteDescription"
          id="note_description"
          spellCheck={false}
          value={values.description}
          onMouseDown={(e) => e.stopPropagation()}
          onChange={(e) => {
            setValues({ ...values, description: e.target.value });
            setValuesHaveChanges({ ...valuesHaveChanges, description: true });
          }}
          style={{
            fontStyle: valuesHaveChanges.description ? "italic" : null,
            color: getTextColorBasedOnHex(
              note.color.hex_code,
              "#DBDBE4",
              "#2D2D33"
            ),
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
        <small>
          <FontAwesomeIcon icon={faPlus} /> {created}
        </small>
        <small>
          <FontAwesomeIcon icon={faArrowsRotate} /> {updated}
        </small>
      </div>
    </div>
  );
};

export default NoteCard;
