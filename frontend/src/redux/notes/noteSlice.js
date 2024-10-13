import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
};

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    getNotesSuccess: (state, action) => {
      state.notes = action.payload;
    },
    createNoteSuccess: (state, action) => {
      state.notes.push(action.payload);
    },
    deleteNoteSuccess: (state, action) => {
      state.notes = state.notes.filter(
        (note) => note.id !== action.payload?.note_id
      );
    },
    updateNoteSuccess: (state, action) => {
      const { id, ...data } = action.payload;
      let targetNoteIndex = state.notes.findIndex((note) => note.id === id);
      state.notes[targetNoteIndex] = {
        ...state.notes[targetNoteIndex],
        ...data,
      };
    },
  },
});

export const {
  getNotesSuccess,
  createNoteSuccess,
  deleteNoteSuccess,
  updateNoteSuccess,
} = noteSlice.actions;

export default noteSlice.reducer;
