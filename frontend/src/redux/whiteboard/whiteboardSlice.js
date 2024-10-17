import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  whiteboard: {
    square_size: 25,
    has_squares: false,
    id: null,
  },
};

export const whiteboardSlice = createSlice({
  name: "whiteboard",
  initialState,
  reducers: {
    setWhiteBoardSuccess: (state, action) => {
      state.whiteboard = action.payload;
    },
  },
});

export const { setWhiteBoardSuccess } = whiteboardSlice.actions;

export default whiteboardSlice.reducer;
