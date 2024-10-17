import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: {
    is_dark: false,
    id: null,
  },
};

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setModeSuccess: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { setModeSuccess } = modeSlice.actions;

export default modeSlice.reducer;
