import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getColors, getNotes, getMode } from "../redux/types";

import Sidebar from "../components/notes/Sidebar";
import ModeToggle from "../components/notes/ModeToggle";
import NoteCard from "../components/notes/NoteCard";
import { refreshAccessToken } from "../utils/auth";

const NotePage = () => {
  const [squareSize, setSquareSize] = useState(25);
  const [isSquares, setIsSquares] = useState(true);

  const access_token = useSelector((state) => state.auth.access_token);
  const mode = useSelector((state) => state.mode.mode);
  const notes = useSelector((state) => state.note.notes);
  const dispatch = useDispatch();

  useEffect(() => {
    if (access_token) {
      dispatch(getNotes());
      dispatch(getColors());
      dispatch(getMode());
    } else {
      (async () => {
        await refreshAccessToken();
        dispatch(getNotes());
        dispatch(getColors());
        dispatch(getMode());
      })();
    }
  }, [access_token]);

  return (
    <div
      className={`notesWrapper ${isSquares ? "" : "noSquares"}`}
      data-mode={mode}
      style={{
        "--square-size": `${squareSize}px`,
      }}
    >
      <ModeToggle />
      <Sidebar />
      <div className="notesWhiteboard">
        {notes && notes.map((note) => <NoteCard key={note.id} note={note} />)}
      </div>

      <div className="whiteboardOptionContainer">
        {isSquares && (
          <input
            type="range"
            name="squareRange"
            id="square_range"
            min={15}
            max={275}
            value={squareSize}
            onChange={(e) => {
              setSquareSize(e.target.value);
            }}
          />
        )}
        <input
          type="checkbox"
          name="isSquares"
          id="is_squares"
          checked={isSquares}
          onChange={(e) => setIsSquares(e.target.checked)}
        />
      </div>
    </div>
  );
};

export default NotePage;
