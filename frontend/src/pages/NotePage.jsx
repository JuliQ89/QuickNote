import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getColors, getNotes } from "../redux/types";

import Sidebar from "../components/notes/Sidebar";
import ModeToggle from "../components/notes/ModeToggle";
import NoteCard from "../components/notes/NoteCard";

const NotePage = () => {
  const mode = useSelector((state) => state.mode.mode);
  const notes = useSelector((state) => state.note.notes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotes());
    dispatch(getColors());
  }, []);

  return (
    <div className="notesWrapper" data-mode={mode}>
      <ModeToggle />
      <Sidebar />
      <div className="notesWhiteboard">
        {notes && notes.map((note) => <NoteCard key={note.id} note={note} />)}
      </div>
    </div>
  );
};

export default NotePage;
