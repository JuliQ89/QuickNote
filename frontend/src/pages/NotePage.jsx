import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { faGear } from "@fortawesome/free-solid-svg-icons";

import {
  getColors,
  getNotes,
  getMode,
  getWhiteBoard,
  updateWhiteBoard,
} from "../redux/types";

import Sidebar from "../components/notes/Sidebar";
import ModeToggle from "../components/notes/ModeToggle";
import NoteCard from "../components/notes/NoteCard";
import WhiteBoardDropdown from "../components/dropdown/WhiteBoardDropdown";
import { refreshAccessToken } from "../utils/auth";

const NotePage = () => {
  const whiteboard = useSelector((state) => state.whiteboard.whiteboard);

  const access_token = useSelector((state) => state.auth.access_token);
  const mode = useSelector((state) => state.mode.mode);
  const notes = useSelector((state) => state.note.notes);
  const dispatch = useDispatch();

  useEffect(() => {
    if (access_token) {
      dispatch(getNotes());
      dispatch(getColors());
      dispatch(getMode());
      dispatch(getWhiteBoard());
    } else {
      (async () => {
        await refreshAccessToken();
        dispatch(getNotes());
        dispatch(getColors());
        dispatch(getMode());
        dispatch(getWhiteBoard());
      })();
    }
  }, [access_token]);

  const handleRangeChange = (e) => {
    dispatch(
      updateWhiteBoard({
        square_size: e.target.value,
        id: whiteboard.id,
      })
    );
  };

  return (
    <div
      className={`notesWrapper ${whiteboard.has_squares ? "" : "noSquares"}`}
      data-mode={mode.is_dark ? "dark" : "light"}
      style={{
        "--square-size": `${whiteboard.square_size}px`,
      }}
    >
      <ModeToggle />
      <Sidebar />
      <div className="notesWhiteboard">
        {notes && notes.map((note) => <NoteCard key={note.id} note={note} />)}
      </div>

      <WhiteBoardDropdown icon={faGear} pos_y="0.75rem" pos_x="0.75rem">
        <div className="whiteboardOptionContainer">
          <input
            type="range"
            name="squareRange"
            id="square_range"
            className="htmlRange"
            min={15}
            max={750}
            title={whiteboard.square_size}
            value={whiteboard.square_size}
            onChange={(e) => handleRangeChange(e)}
          />
          <input
            type="checkbox"
            name="isSquares"
            id="is_squares"
            className="htmlCheckbox"
            checked={whiteboard.has_squares}
            onChange={(e) =>
              dispatch(
                updateWhiteBoard({
                  has_squares: !whiteboard.has_squares,
                  id: whiteboard.id,
                })
              )
            }
          />
        </div>
      </WhiteBoardDropdown>
    </div>
  );
};

export default NotePage;
